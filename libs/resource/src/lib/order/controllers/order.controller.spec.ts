import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Order as Entity,
  OrderView as EntityView,
} from '../entities';
import { OrderService as Service } from '../services';
import { OrderController as Controller } from './order.controller';

const validTestData: Entity[] = [
  { order: 'test order 1' },
  { order: 'test order 2' },
  { order: 'test order 3' },
  { order: 'test order 4' },
  { order: 'test order 5' },
];

const updatedItem: Partial<Entity> = {
  order: 'updated',
};

const invalidItem: Entity = {
  order: 'f',
};

describe('OrderController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/order/controller-test.sqlite',
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
        .post('/order')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET order] should get all order entities.', async () => {
    return await request(app.getHttpServer())
      .get('/order')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET order/:id] should get a order entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/order/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /order/?take=1&skip=1] should paginate the order entities.', async () => {
    return request(app.getHttpServer())
      .get('/order/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST order] should NOT create the order entity with INVALID order property', () => {
    return request(app.getHttpServer())
      .post('/order')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'order must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT order/:id] should update the order by id.', async () => {
    return request(app.getHttpServer())
      .put('/order/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE order/:id] should delete the order by id.', async () => {
    return request(app.getHttpServer())
      .delete('/order/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
