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
import { EmployeeOwnController as Controller } from './employee-own.controller';

const validTestData: Entity[] = [
  { employee: 'test employee 1', createdBy: 1 },
  { employee: 'test employee 2', createdBy: 2 },
  { employee: 'test employee 3', createdBy: 3 },
  { employee: 'test employee 4', createdBy: 100 },
  { employee: 'test employee 5', createdBy: 100 },
  { employee: 'test employee 6', createdBy: 100 },
  { employee: 'test employee 7', createdBy: 100 },
  { employee: 'test employee 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  employee: 'updated',
};

const invalidItem: Entity = {
  employee: 'f',
};

describe('EmployeeOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/employee-own/controller-test.sqlite',
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

  it('[/GET ownemployee] should get all own employee entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownemployee')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownemployee/:id] should get a employee entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownemployee/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownemployee/?take=1&skip=1] should paginate the employee entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownemployee/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownemployee/:id] should update the employee by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownemployee/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownemployee/:id] should delete the employee by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownemployee/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
