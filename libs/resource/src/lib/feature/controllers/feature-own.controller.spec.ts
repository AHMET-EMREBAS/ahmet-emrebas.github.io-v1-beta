import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Feature as Entity,
  FeatureView as EntityView,
} from '../entities';
import { FeatureService as Service } from '../services';
import { FeatureOwnController as Controller } from './feature-own.controller';

const validTestData: Entity[] = [
  { feature: 'test feature 1', createdBy: 1 },
  { feature: 'test feature 2', createdBy: 2 },
  { feature: 'test feature 3', createdBy: 3 },
  { feature: 'test feature 4', createdBy: 100 },
  { feature: 'test feature 5', createdBy: 100 },
  { feature: 'test feature 6', createdBy: 100 },
  { feature: 'test feature 7', createdBy: 100 },
  { feature: 'test feature 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  feature: 'updated',
};

const invalidItem: Entity = {
  feature: 'f',
};

describe('FeatureOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/feature-own/controller-test.sqlite',
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

  it('[/GET ownfeature] should get all own feature entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownfeature')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownfeature/:id] should get a feature entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownfeature/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownfeature/?take=1&skip=1] should paginate the feature entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownfeature/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownfeature/:id] should update the feature by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownfeature/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownfeature/:id] should delete the feature by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownfeature/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
