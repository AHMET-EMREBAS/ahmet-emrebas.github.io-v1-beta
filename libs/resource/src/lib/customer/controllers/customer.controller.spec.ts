import { QueryDTO } from 'core';
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
import { CustomerController as Controller } from './customer.controller';

const validTestData: Entity[] = [
  { customer: 'test customer 1' },
  { customer: 'test customer 2' },
  { customer: 'test customer 3' },
  { customer: 'test customer 4' },
  { customer: 'test customer 5' },
];

const updatedItem: Partial<Entity> = {
  customer: 'updated',
};

const invalidItem: Entity = {
  customer: 'f',
};

describe('CustomerController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/customer/controller-test.sqlite',
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
        .post('/customer')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET customer] should get all customer entities.', async () => {
    return await request(app.getHttpServer())
      .get('/customer')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET customer/:id] should get a customer entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/customer/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /customer/?take=1&skip=1] should paginate the customer entities.', async () => {
    return request(app.getHttpServer())
      .get('/customer/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST customer] should NOT create the customer entity with INVALID customer property', () => {
    return request(app.getHttpServer())
      .post('/customer')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'customer must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT customer/:id] should update the customer by id.', async () => {
    return request(app.getHttpServer())
      .put('/customer/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE customer/:id] should delete the customer by id.', async () => {
    return request(app.getHttpServer())
      .delete('/customer/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
