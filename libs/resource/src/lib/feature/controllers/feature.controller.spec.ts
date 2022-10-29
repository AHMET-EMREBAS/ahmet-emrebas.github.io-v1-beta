import { QueryDTO } from 'core';
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
import { FeatureController as Controller } from './feature.controller';

const validTestData: Entity[] = [
  { feature: 'test feature 1' },
  { feature: 'test feature 2' },
  { feature: 'test feature 3' },
  { feature: 'test feature 4' },
  { feature: 'test feature 5' },
];

const updatedItem: Partial<Entity> = {
  feature: 'updated',
};

const invalidItem: Entity = {
  feature: 'f',
};

describe('FeatureController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/feature/controller-test.sqlite',
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
        .post('/feature')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET feature] should get all feature entities.', async () => {
    return await request(app.getHttpServer())
      .get('/feature')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET feature/:id] should get a feature entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/feature/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /feature/?take=1&skip=1] should paginate the feature entities.', async () => {
    return request(app.getHttpServer())
      .get('/feature/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST feature] should NOT create the feature entity with INVALID feature property', () => {
    return request(app.getHttpServer())
      .post('/feature')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'feature must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT feature/:id] should update the feature by id.', async () => {
    return request(app.getHttpServer())
      .put('/feature/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE feature/:id] should delete the feature by id.', async () => {
    return request(app.getHttpServer())
      .delete('/feature/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
