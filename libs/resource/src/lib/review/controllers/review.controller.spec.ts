import { QueryDTO } from 'core';
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
import { ReviewController as Controller } from './review.controller';

const validTestData: Entity[] = [
  { review: 'test review 1' },
  { review: 'test review 2' },
  { review: 'test review 3' },
  { review: 'test review 4' },
  { review: 'test review 5' },
];

const updatedItem: Partial<Entity> = {
  review: 'updated',
};

const invalidItem: Entity = {
  review: 'f',
};

describe('ReviewController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/review/controller-test.sqlite',
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
        .post('/review')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET review] should get all review entities.', async () => {
    return await request(app.getHttpServer())
      .get('/review')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET review/:id] should get a review entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/review/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /review/?take=1&skip=1] should paginate the review entities.', async () => {
    return request(app.getHttpServer())
      .get('/review/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST review] should NOT create the review entity with INVALID review property', () => {
    return request(app.getHttpServer())
      .post('/review')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'review must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT review/:id] should update the review by id.', async () => {
    return request(app.getHttpServer())
      .put('/review/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE review/:id] should delete the review by id.', async () => {
    return request(app.getHttpServer())
      .delete('/review/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
