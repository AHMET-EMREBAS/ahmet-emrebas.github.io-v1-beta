import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Quantity as Entity,
  QuantityView as EntityView,
} from '../entities';
import { QuantityService as Service } from '../services';
import { QuantityController as Controller } from './quantity.controller';

const validTestData: Entity[] = [
  { quantity: 'test quantity 1' },
  { quantity: 'test quantity 2' },
  { quantity: 'test quantity 3' },
  { quantity: 'test quantity 4' },
  { quantity: 'test quantity 5' },
];

const updatedItem: Partial<Entity> = {
  quantity: 'updated',
};

const invalidItem: Entity = {
  quantity: 'f',
};

describe('QuantityController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/quantity/controller-test.sqlite',
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
        .post('/quantity')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET quantity] should get all quantity entities.', async () => {
    return await request(app.getHttpServer())
      .get('/quantity')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET quantity/:id] should get a quantity entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/quantity/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /quantity/?take=1&skip=1] should paginate the quantity entities.', async () => {
    return request(app.getHttpServer())
      .get('/quantity/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST quantity] should NOT create the quantity entity with INVALID quantity property', () => {
    return request(app.getHttpServer())
      .post('/quantity')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'quantity must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT quantity/:id] should update the quantity by id.', async () => {
    return request(app.getHttpServer())
      .put('/quantity/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE quantity/:id] should delete the quantity by id.', async () => {
    return request(app.getHttpServer())
      .delete('/quantity/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
