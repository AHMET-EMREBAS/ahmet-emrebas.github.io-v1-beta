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
import { QuantityOwnController as Controller } from './quantity-own.controller';

const validTestData: Entity[] = [
  { quantity: 'test quantity 1', createdBy: 1 },
  { quantity: 'test quantity 2', createdBy: 2 },
  { quantity: 'test quantity 3', createdBy: 3 },
  { quantity: 'test quantity 4', createdBy: 100 },
  { quantity: 'test quantity 5', createdBy: 100 },
  { quantity: 'test quantity 6', createdBy: 100 },
  { quantity: 'test quantity 7', createdBy: 100 },
  { quantity: 'test quantity 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  quantity: 'updated',
};

const invalidItem: Entity = {
  quantity: 'f',
};

describe('QuantityOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/quantity-own/controller-test.sqlite',
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

  it('[/GET ownquantity] should get all own quantity entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownquantity')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownquantity/:id] should get a quantity entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownquantity/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownquantity/?take=1&skip=1] should paginate the quantity entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownquantity/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownquantity/:id] should update the quantity by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownquantity/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownquantity/:id] should delete the quantity by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownquantity/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
