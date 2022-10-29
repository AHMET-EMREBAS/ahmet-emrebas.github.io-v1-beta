import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Article as Entity,
  ArticleView as EntityView,
} from '../entities';
import { ArticleService as Service } from '../services';
import { ArticleOwnController as Controller } from './article-own.controller';

const validTestData: Entity[] = [
  { article: 'test article 1', createdBy: 1 },
  { article: 'test article 2', createdBy: 2 },
  { article: 'test article 3', createdBy: 3 },
  { article: 'test article 4', createdBy: 100 },
  { article: 'test article 5', createdBy: 100 },
  { article: 'test article 6', createdBy: 100 },
  { article: 'test article 7', createdBy: 100 },
  { article: 'test article 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  article: 'updated',
};

const invalidItem: Entity = {
  article: 'f',
};

describe('ArticleOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/article-own/controller-test.sqlite',
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

  it('[/GET ownarticle] should get all own article entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownarticle')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownarticle/:id] should get a article entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownarticle/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownarticle/?take=1&skip=1] should paginate the article entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownarticle/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownarticle/:id] should update the article by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownarticle/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownarticle/:id] should delete the article by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownarticle/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
