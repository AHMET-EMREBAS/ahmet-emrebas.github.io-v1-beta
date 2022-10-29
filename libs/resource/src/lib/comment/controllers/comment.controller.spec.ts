import { QueryDTO } from 'core';
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
import { CommentController as Controller } from './comment.controller';

const validTestData: Entity[] = [
  { comment: 'test comment 1' },
  { comment: 'test comment 2' },
  { comment: 'test comment 3' },
  { comment: 'test comment 4' },
  { comment: 'test comment 5' },
];

const updatedItem: Partial<Entity> = {
  comment: 'updated',
};

const invalidItem: Entity = {
  comment: 'f',
};

describe('CommentController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/comment/controller-test.sqlite',
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
        .post('/comment')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET comment] should get all comment entities.', async () => {
    return await request(app.getHttpServer())
      .get('/comment')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET comment/:id] should get a comment entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/comment/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /comment/?take=1&skip=1] should paginate the comment entities.', async () => {
    return request(app.getHttpServer())
      .get('/comment/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST comment] should NOT create the comment entity with INVALID comment property', () => {
    return request(app.getHttpServer())
      .post('/comment')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'comment must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT comment/:id] should update the comment by id.', async () => {
    return request(app.getHttpServer())
      .put('/comment/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE comment/:id] should delete the comment by id.', async () => {
    return request(app.getHttpServer())
      .delete('/comment/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
