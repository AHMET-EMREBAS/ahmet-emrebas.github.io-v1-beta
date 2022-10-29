import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Customer as Entity,
  CustomerView as EntityView,
} from '../entities';
import { CustomerService as Service } from '../services';
import { CustomerOwnController as Controller } from './customer-own.controller';

const validTestData: Entity[] = [
  { customer: 'test customer 1', createdBy: 1 },
  { customer: 'test customer 2', createdBy: 2 },
  { customer: 'test customer 3', createdBy: 3 },
  { customer: 'test customer 4', createdBy: 100 },
  { customer: 'test customer 5', createdBy: 100 },
  { customer: 'test customer 6', createdBy: 100 },
  { customer: 'test customer 7', createdBy: 100 },
  { customer: 'test customer 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  customer: 'updated',
};

const invalidItem: Entity = {
  customer: 'f',
};

describe('CustomerOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/customer-own/controller-test.sqlite',
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

  it('[/GET owncustomer] should get all own customer entities.', async () => {
    return await request(app.getHttpServer())
      .get('/owncustomer')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET owncustomer/:id] should get a customer entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/owncustomer/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /owncustomer/?take=1&skip=1] should paginate the customer entities.', async () => {
    return request(app.getHttpServer())
      .get('/owncustomer/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT owncustomer/:id] should update the customer by id.', async () => {
    return request(app.getHttpServer())
      .put('/owncustomer/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE owncustomer/:id] should delete the customer by id.', async () => {
    return request(app.getHttpServer())
      .delete('/owncustomer/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
