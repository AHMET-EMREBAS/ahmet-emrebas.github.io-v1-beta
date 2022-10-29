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
import { DepartmentOwnController as Controller } from './department-own.controller';

const validTestData: Entity[] = [
  { department: 'test department 1', createdBy: 1 },
  { department: 'test department 2', createdBy: 2 },
  { department: 'test department 3', createdBy: 3 },
  { department: 'test department 4', createdBy: 100 },
  { department: 'test department 5', createdBy: 100 },
  { department: 'test department 6', createdBy: 100 },
  { department: 'test department 7', createdBy: 100 },
  { department: 'test department 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  department: 'updated',
};

const invalidItem: Entity = {
  department: 'f',
};

describe('DepartmentOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/department-own/controller-test.sqlite',
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

    app.use('*', (req, res, next) => {
      req.user = { id: 100 };
      return next();
    });
    app.init();
    service = module.get<Service>(Service);
    for (const item of validTestData) {
      await service.create(item);
    }
  });

  it('[/GET owndepartment] should get all own department entities.', async () => {
    return await request(app.getHttpServer())
      .get('/owndepartment')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET owndepartment/:id] should get a department entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/owndepartment/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /owndepartment/?take=1&skip=1] should paginate the department entities.', async () => {
    return request(app.getHttpServer())
      .get('/owndepartment/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT owndepartment/:id] should update the department by id.', async () => {
    return request(app.getHttpServer())
      .put('/owndepartment/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE owndepartment/:id] should delete the department by id.', async () => {
    return request(app.getHttpServer())
      .delete('/owndepartment/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
