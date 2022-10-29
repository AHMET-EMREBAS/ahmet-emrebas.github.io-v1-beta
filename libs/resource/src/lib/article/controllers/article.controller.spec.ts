import { QueryDTO } from 'core';
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
import { ArticleController as Controller } from './article.controller';

const validTestData: Entity[] = [
  { article: 'test article 1' },
  { article: 'test article 2' },
  { article: 'test article 3' },
  { article: 'test article 4' },
  { article: 'test article 5' },
];

const updatedItem: Partial<Entity> = {
  article: 'updated',
};

const invalidItem: Entity = {
  article: 'f',
};

describe('ArticleController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/article/controller-test.sqlite',
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
        .post('/article')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET article] should get all article entities.', async () => {
    return await request(app.getHttpServer())
      .get('/article')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET article/:id] should get a article entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/article/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /article/?take=1&skip=1] should paginate the article entities.', async () => {
    return request(app.getHttpServer())
      .get('/article/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST article] should NOT create the article entity with INVALID article property', () => {
    return request(app.getHttpServer())
      .post('/article')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'article must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT article/:id] should update the article by id.', async () => {
    return request(app.getHttpServer())
      .put('/article/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE article/:id] should delete the article by id.', async () => {
    return request(app.getHttpServer())
      .delete('/article/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
