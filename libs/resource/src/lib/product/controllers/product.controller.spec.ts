import { QueryDTO } from 'core';
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
import { ProductController as Controller } from './product.controller';

const validTestData: Entity[] = [
  { product: 'test product 1' },
  { product: 'test product 2' },
  { product: 'test product 3' },
  { product: 'test product 4' },
  { product: 'test product 5' },
];

const updatedItem: Partial<Entity> = {
  product: 'updated',
};

const invalidItem: Entity = {
  product: 'f',
};

describe('ProductController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/product/controller-test.sqlite',
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
        .post('/product')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET product] should get all product entities.', async () => {
    return await request(app.getHttpServer())
      .get('/product')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET product/:id] should get a product entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/product/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /product/?take=1&skip=1] should paginate the product entities.', async () => {
    return request(app.getHttpServer())
      .get('/product/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST product] should NOT create the product entity with INVALID product property', () => {
    return request(app.getHttpServer())
      .post('/product')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'product must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT product/:id] should update the product by id.', async () => {
    return request(app.getHttpServer())
      .put('/product/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE product/:id] should delete the product by id.', async () => {
    return request(app.getHttpServer())
      .delete('/product/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
