import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Category as Entity,
  CategoryView as EntityView,
} from '../entities';
import { CategoryService as Service } from '../services';
import { CategoryOwnController as Controller } from './category-own.controller';

const validTestData: Entity[] = [
  { category: 'test category 1', createdBy: 1 },
  { category: 'test category 2', createdBy: 2 },
  { category: 'test category 3', createdBy: 3 },
  { category: 'test category 4', createdBy: 100 },
  { category: 'test category 5', createdBy: 100 },
  { category: 'test category 6', createdBy: 100 },
  { category: 'test category 7', createdBy: 100 },
  { category: 'test category 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  category: 'updated',
};

const invalidItem: Entity = {
  category: 'f',
};

describe('CategoryOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/category-own/controller-test.sqlite',
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

  it('[/GET own-category] should get all own category entities.', async () => {
    return await request(app.getHttpServer())
      .get('/own-category')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET own-category/:id] should get a category entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/own-category/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /own-category/?take=1&skip=1] should paginate the category entities.', async () => {
    return request(app.getHttpServer())
      .get('/own-category/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT own-category/:id] should update the category by id.', async () => {
    return request(app.getHttpServer())
      .put('/own-category/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE own-category/:id] should delete the category by id.', async () => {
    return request(app.getHttpServer())
      .delete('/own-category/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
