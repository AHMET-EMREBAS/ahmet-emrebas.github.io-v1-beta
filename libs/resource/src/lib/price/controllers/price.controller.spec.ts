import { QueryDTO } from 'core';
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
import { PriceController as Controller } from './price.controller';

const validTestData: Entity[] = [
  { price: 'test price 1' },
  { price: 'test price 2' },
  { price: 'test price 3' },
  { price: 'test price 4' },
  { price: 'test price 5' },
];

const updatedItem: Partial<Entity> = {
  price: 'updated',
};

const invalidItem: Entity = {
  price: 'f',
};

describe('PriceController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/price/controller-test.sqlite',
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
        .post('/price')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET price] should get all price entities.', async () => {
    return await request(app.getHttpServer())
      .get('/price')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET price/:id] should get a price entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/price/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /price/?take=1&skip=1] should paginate the price entities.', async () => {
    return request(app.getHttpServer())
      .get('/price/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST price] should NOT create the price entity with INVALID price property', () => {
    return request(app.getHttpServer())
      .post('/price')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'price must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT price/:id] should update the price by id.', async () => {
    return request(app.getHttpServer())
      .put('/price/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE price/:id] should delete the price by id.', async () => {
    return request(app.getHttpServer())
      .delete('/price/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
