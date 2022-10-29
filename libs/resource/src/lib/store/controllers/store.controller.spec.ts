import { QueryDTO } from 'core';
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
import { StoreController as Controller } from './store.controller';

const validTestData: Entity[] = [
  { store: 'test store 1' },
  { store: 'test store 2' },
  { store: 'test store 3' },
  { store: 'test store 4' },
  { store: 'test store 5' },
];

const updatedItem: Partial<Entity> = {
  store: 'updated',
};

const invalidItem: Entity = {
  store: 'f',
};

describe('StoreController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/store/controller-test.sqlite',
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
        .post('/store')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET store] should get all store entities.', async () => {
    return await request(app.getHttpServer())
      .get('/store')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET store/:id] should get a store entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/store/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /store/?take=1&skip=1] should paginate the store entities.', async () => {
    return request(app.getHttpServer())
      .get('/store/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST store] should NOT create the store entity with INVALID store property', () => {
    return request(app.getHttpServer())
      .post('/store')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'store must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT store/:id] should update the store by id.', async () => {
    return request(app.getHttpServer())
      .put('/store/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE store/:id] should delete the store by id.', async () => {
    return request(app.getHttpServer())
      .delete('/store/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
