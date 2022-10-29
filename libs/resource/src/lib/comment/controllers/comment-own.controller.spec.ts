import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Comment as Entity,
  CommentView as EntityView,
} from '../entities';
import { CommentService as Service } from '../services';
import { CommentOwnController as Controller } from './comment-own.controller';

const validTestData: Entity[] = [
  { comment: 'test comment 1', createdBy: 1 },
  { comment: 'test comment 2', createdBy: 2 },
  { comment: 'test comment 3', createdBy: 3 },
  { comment: 'test comment 4', createdBy: 100 },
  { comment: 'test comment 5', createdBy: 100 },
  { comment: 'test comment 6', createdBy: 100 },
  { comment: 'test comment 7', createdBy: 100 },
  { comment: 'test comment 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  comment: 'updated',
};

const invalidItem: Entity = {
  comment: 'f',
};

describe('CommentOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/comment-own/controller-test.sqlite',
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

  it('[/GET owncomment] should get all own comment entities.', async () => {
    return await request(app.getHttpServer())
      .get('/owncomment')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET owncomment/:id] should get a comment entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/owncomment/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /owncomment/?take=1&skip=1] should paginate the comment entities.', async () => {
    return request(app.getHttpServer())
      .get('/owncomment/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT owncomment/:id] should update the comment by id.', async () => {
    return request(app.getHttpServer())
      .put('/owncomment/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE owncomment/:id] should delete the comment by id.', async () => {
    return request(app.getHttpServer())
      .delete('/owncomment/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
