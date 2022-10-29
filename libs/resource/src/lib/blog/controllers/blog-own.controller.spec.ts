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
import { BlogOwnController as Controller } from './blog-own.controller';

const validTestData: Entity[] = [
  { blog: 'test blog 1', createdBy: 1 },
  { blog: 'test blog 2', createdBy: 2 },
  { blog: 'test blog 3', createdBy: 3 },
  { blog: 'test blog 4', createdBy: 100 },
  { blog: 'test blog 5', createdBy: 100 },
  { blog: 'test blog 6', createdBy: 100 },
  { blog: 'test blog 7', createdBy: 100 },
  { blog: 'test blog 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  blog: 'updated',
};

const invalidItem: Entity = {
  blog: 'f',
};

describe('BlogOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/blog-own/controller-test.sqlite',
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

  it('[/GET ownblog] should get all own blog entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownblog')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownblog/:id] should get a blog entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownblog/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownblog/?take=1&skip=1] should paginate the blog entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownblog/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownblog/:id] should update the blog by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownblog/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownblog/:id] should delete the blog by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownblog/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
