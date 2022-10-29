import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Store as Entity,
  StoreView as EntityView,
} from '../entities';
import { StoreService as Service } from '../services';
import { StoreOwnController as Controller } from './store-own.controller';

const validTestData: Entity[] = [
  { store: 'test store 1', createdBy: 1 },
  { store: 'test store 2', createdBy: 2 },
  { store: 'test store 3', createdBy: 3 },
  { store: 'test store 4', createdBy: 100 },
  { store: 'test store 5', createdBy: 100 },
  { store: 'test store 6', createdBy: 100 },
  { store: 'test store 7', createdBy: 100 },
  { store: 'test store 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  store: 'updated',
};

const invalidItem: Entity = {
  store: 'f',
};

describe('StoreOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/store-own/controller-test.sqlite',
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

  it('[/GET ownstore] should get all own store entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownstore')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownstore/:id] should get a store entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownstore/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownstore/?take=1&skip=1] should paginate the store entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownstore/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownstore/:id] should update the store by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownstore/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownstore/:id] should delete the store by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownstore/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
