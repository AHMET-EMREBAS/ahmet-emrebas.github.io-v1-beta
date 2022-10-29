import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Blog as Entity,
  BlogView as EntityView,
} from '../entities';
import { BlogService as Service } from '../services';
import { BlogController as Controller } from './blog.controller';

const validTestData: Entity[] = [
  { blog: 'test blog 1' },
  { blog: 'test blog 2' },
  { blog: 'test blog 3' },
  { blog: 'test blog 4' },
  { blog: 'test blog 5' },
];

const updatedItem: Partial<Entity> = {
  blog: 'updated',
};

const invalidItem: Entity = {
  blog: 'f',
};

describe('BlogController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/blog/controller-test.sqlite',
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
        .post('/blog')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET blog] should get all blog entities.', async () => {
    return await request(app.getHttpServer())
      .get('/blog')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET blog/:id] should get a blog entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/blog/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /blog/?take=1&skip=1] should paginate the blog entities.', async () => {
    return request(app.getHttpServer())
      .get('/blog/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST blog] should NOT create the blog entity with INVALID blog property', () => {
    return request(app.getHttpServer())
      .post('/blog')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'blog must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT blog/:id] should update the blog by id.', async () => {
    return request(app.getHttpServer())
      .put('/blog/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE blog/:id] should delete the blog by id.', async () => {
    return request(app.getHttpServer())
      .delete('/blog/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
