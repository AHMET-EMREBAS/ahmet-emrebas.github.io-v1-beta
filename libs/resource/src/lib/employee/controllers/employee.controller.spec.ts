import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Employee as Entity,
  EmployeeView as EntityView,
} from '../entities';
import { EmployeeService as Service } from '../services';
import { EmployeeController as Controller } from './employee.controller';

const validTestData: Entity[] = [
  { employee: 'test employee 1' },
  { employee: 'test employee 2' },
  { employee: 'test employee 3' },
  { employee: 'test employee 4' },
  { employee: 'test employee 5' },
];

const updatedItem: Partial<Entity> = {
  employee: 'updated',
};

const invalidItem: Entity = {
  employee: 'f',
};

describe('EmployeeController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/employee/controller-test.sqlite',
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
        .post('/employee')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET employee] should get all employee entities.', async () => {
    return await request(app.getHttpServer())
      .get('/employee')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET employee/:id] should get a employee entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/employee/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /employee/?take=1&skip=1] should paginate the employee entities.', async () => {
    return request(app.getHttpServer())
      .get('/employee/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST employee] should NOT create the employee entity with INVALID employee property', () => {
    return request(app.getHttpServer())
      .post('/employee')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'employee must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT employee/:id] should update the employee by id.', async () => {
    return request(app.getHttpServer())
      .put('/employee/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE employee/:id] should delete the employee by id.', async () => {
    return request(app.getHttpServer())
      .delete('/employee/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
