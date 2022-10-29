import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Review as Entity,
  ReviewView as EntityView,
} from '../entities';
import { ReviewService as Service } from '../services';
import { ReviewOwnController as Controller } from './review-own.controller';

const validTestData: Entity[] = [
  { review: 'test review 1', createdBy: 1 },
  { review: 'test review 2', createdBy: 2 },
  { review: 'test review 3', createdBy: 3 },
  { review: 'test review 4', createdBy: 100 },
  { review: 'test review 5', createdBy: 100 },
  { review: 'test review 6', createdBy: 100 },
  { review: 'test review 7', createdBy: 100 },
  { review: 'test review 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  review: 'updated',
};

const invalidItem: Entity = {
  review: 'f',
};

describe('ReviewOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/review-own/controller-test.sqlite',
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

  it('[/GET ownreview] should get all own review entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownreview')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownreview/:id] should get a review entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownreview/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownreview/?take=1&skip=1] should paginate the review entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownreview/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownreview/:id] should update the review by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownreview/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownreview/:id] should delete the review by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownreview/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
