import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Price as Entity,
  PriceView as EntityView,
} from '../entities';
import { PriceService as Service } from '../services';
import { PriceOwnController as Controller } from './price-own.controller';

const validTestData: Entity[] = [
  { price: 'test price 1', createdBy: 1 },
  { price: 'test price 2', createdBy: 2 },
  { price: 'test price 3', createdBy: 3 },
  { price: 'test price 4', createdBy: 100 },
  { price: 'test price 5', createdBy: 100 },
  { price: 'test price 6', createdBy: 100 },
  { price: 'test price 7', createdBy: 100 },
  { price: 'test price 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  price: 'updated',
};

const invalidItem: Entity = {
  price: 'f',
};

describe('PriceOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/price-own/controller-test.sqlite',
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

  it('[/GET ownprice] should get all own price entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownprice')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownprice/:id] should get a price entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownprice/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownprice/?take=1&skip=1] should paginate the price entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownprice/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownprice/:id] should update the price by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownprice/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownprice/:id] should delete the price by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownprice/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
