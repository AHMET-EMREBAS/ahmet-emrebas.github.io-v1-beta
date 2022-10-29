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
import { PromotionOwnController as Controller } from './promotion-own.controller';

const validTestData: Entity[] = [
  { promotion: 'test promotion 1', createdBy: 1 },
  { promotion: 'test promotion 2', createdBy: 2 },
  { promotion: 'test promotion 3', createdBy: 3 },
  { promotion: 'test promotion 4', createdBy: 100 },
  { promotion: 'test promotion 5', createdBy: 100 },
  { promotion: 'test promotion 6', createdBy: 100 },
  { promotion: 'test promotion 7', createdBy: 100 },
  { promotion: 'test promotion 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  promotion: 'updated',
};

const invalidItem: Entity = {
  promotion: 'f',
};

describe('PromotionOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/promotion-own/controller-test.sqlite',
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

  it('[/GET ownpromotion] should get all own promotion entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownpromotion')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownpromotion/:id] should get a promotion entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownpromotion/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownpromotion/?take=1&skip=1] should paginate the promotion entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownpromotion/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownpromotion/:id] should update the promotion by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownpromotion/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownpromotion/:id] should delete the promotion by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownpromotion/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
