import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Department as Entity,
  DepartmentView as EntityView,
} from '../entities';
import { DepartmentService as Service } from '../services';
import { DepartmentController as Controller } from './department.controller';

const validTestData: Entity[] = [
  { department: 'test department 1' },
  { department: 'test department 2' },
  { department: 'test department 3' },
  { department: 'test department 4' },
  { department: 'test department 5' },
];

const updatedItem: Partial<Entity> = {
  department: 'updated',
};

const invalidItem: Entity = {
  department: 'f',
};

describe('DepartmentController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/department/controller-test.sqlite',
          autoLoadEntities: true,
          synchronize: true,
          dropSchema: true,
        }),
        TypeOrmModule.forFeature([Entity, EntityView]),
      ],
      controllers: [Controller],
      providers: [Service],
    }).compile();

    app = module.createNestApplication();
    app.init();
    service = module.get<Service>(Service);
    for (const item of validTestData) {
      await request(app.getHttpServer())
        .post('/department')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET department] should get all department entities.', async () => {
    return await request(app.getHttpServer())
      .get('/department')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET department/:id] should get a department entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/department/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /department/?take=1&skip=1] should paginate the department entities.', async () => {
    return request(app.getHttpServer())
      .get('/department/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST department] should NOT create the department entity with INVALID department property', () => {
    return request(app.getHttpServer())
      .post('/department')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'department must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT department/:id] should update the department by id.', async () => {
    return request(app.getHttpServer())
      .put('/department/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE department/:id] should delete the department by id.', async () => {
    return request(app.getHttpServer())
      .delete('/department/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
