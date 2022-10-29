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
import { OrderOwnController as Controller } from './order-own.controller';

const validTestData: Entity[] = [
  { order: 'test order 1', createdBy: 1 },
  { order: 'test order 2', createdBy: 2 },
  { order: 'test order 3', createdBy: 3 },
  { order: 'test order 4', createdBy: 100 },
  { order: 'test order 5', createdBy: 100 },
  { order: 'test order 6', createdBy: 100 },
  { order: 'test order 7', createdBy: 100 },
  { order: 'test order 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  order: 'updated',
};

const invalidItem: Entity = {
  order: 'f',
};

describe('OrderOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/order-own/controller-test.sqlite',
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

  it('[/GET ownorder] should get all own order entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownorder')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownorder/:id] should get a order entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownorder/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownorder/?take=1&skip=1] should paginate the order entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownorder/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownorder/:id] should update the order by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownorder/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownorder/:id] should delete the order by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownorder/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
