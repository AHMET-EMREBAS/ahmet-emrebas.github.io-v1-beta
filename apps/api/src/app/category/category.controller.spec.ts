import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category as Entity, CategoryView as EntityView } from './entities';
import { CategoryController as Controller } from './category.controller';
import { CategoryService as Service } from './category.service';

const testData: Entity[] = [
  { category: 'test category 1' },
  { category: 'test category 2' },
  { category: 'test category 3' },
  { category: 'test category 4' },
  { category: 'test category 5' },
];

const validItem: Entity = {
  category: 'fake 1',
};

const updatedItem: Partial<Entity> = {
  category: 'updated',
};

const invalidItem: Entity = {
  category: 'f',
};

describe('categoryController', () => {
  let app: NestApplication;
  let service: Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/category/controller-test.sqlite',
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

    // Create test data
    for (const t of testData) await service.create(t);
  });

  it('/Get category', async () => {
    return request(app.getHttpServer())
      .get('/category')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('/Get category/:id', async () => {
    return request(app.getHttpServer())
      .get('/category/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('/Get category (Paginator) ', async () => {
    return request(app.getHttpServer())
      .get('/category/?take=1')
      .expect(200)
      .then((data) => expect(data.body.length == 1));
  });

  it('/Post category', async () => {
    return request(app.getHttpServer())
      .post('/category')
      .send({ ...validItem })
      .expect(201)
      .then((data) => {
        expect(data.body['category']).toBe(validItem.category);
      });
  });

  it('/Post category (Invalid Input)', () => {
    return request(app.getHttpServer())
      .post('/category')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'category must be longer than or equal to 3 characters'
        );
      });
  });

  it('/Put category/:id', async () => {
    return request(app.getHttpServer())
      .put('/category/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('/Delete category/:id', async () => {
    return request(app.getHttpServer()).delete('/category/1').expect(200);
  });
});
