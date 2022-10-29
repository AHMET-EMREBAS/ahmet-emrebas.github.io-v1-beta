import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Promotion as Entity,
  PromotionView as EntityView,
} from '../entities';
import { PromotionService as Service } from '../services';
import { PromotionController as Controller } from './promotion.controller';

const validTestData: Entity[] = [
  { promotion: 'test promotion 1' },
  { promotion: 'test promotion 2' },
  { promotion: 'test promotion 3' },
  { promotion: 'test promotion 4' },
  { promotion: 'test promotion 5' },
];

const updatedItem: Partial<Entity> = {
  promotion: 'updated',
};

const invalidItem: Entity = {
  promotion: 'f',
};

describe('PromotionController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/promotion/controller-test.sqlite',
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
        .post('/promotion')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET promotion] should get all promotion entities.', async () => {
    return await request(app.getHttpServer())
      .get('/promotion')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET promotion/:id] should get a promotion entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/promotion/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /promotion/?take=1&skip=1] should paginate the promotion entities.', async () => {
    return request(app.getHttpServer())
      .get('/promotion/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST promotion] should NOT create the promotion entity with INVALID promotion property', () => {
    return request(app.getHttpServer())
      .post('/promotion')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'promotion must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT promotion/:id] should update the promotion by id.', async () => {
    return request(app.getHttpServer())
      .put('/promotion/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE promotion/:id] should delete the promotion by id.', async () => {
    return request(app.getHttpServer())
      .delete('/promotion/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
