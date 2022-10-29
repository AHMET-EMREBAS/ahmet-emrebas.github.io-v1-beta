import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Product as Entity,
  ProductView as EntityView,
} from '../entities';
import { ProductService as Service } from '../services';
import { ProductOwnController as Controller } from './product-own.controller';

const validTestData: Entity[] = [
  { product: 'test product 1', createdBy: 1 },
  { product: 'test product 2', createdBy: 2 },
  { product: 'test product 3', createdBy: 3 },
  { product: 'test product 4', createdBy: 100 },
  { product: 'test product 5', createdBy: 100 },
  { product: 'test product 6', createdBy: 100 },
  { product: 'test product 7', createdBy: 100 },
  { product: 'test product 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  product: 'updated',
};

const invalidItem: Entity = {
  product: 'f',
};

describe('ProductOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/product-own/controller-test.sqlite',
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

  it('[/GET ownproduct] should get all own product entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownproduct')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownproduct/:id] should get a product entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownproduct/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownproduct/?take=1&skip=1] should paginate the product entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownproduct/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownproduct/:id] should update the product by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownproduct/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownproduct/:id] should delete the product by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownproduct/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
