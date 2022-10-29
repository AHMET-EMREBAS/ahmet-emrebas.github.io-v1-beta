import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Tag as Entity,
  TagView as EntityView,
} from '../entities';
import { TagService as Service } from '../services';
import { TagController as Controller } from './tag.controller';

const validTestData: Entity[] = [
  { tag: 'test tag 1' },
  { tag: 'test tag 2' },
  { tag: 'test tag 3' },
  { tag: 'test tag 4' },
  { tag: 'test tag 5' },
];

const updatedItem: Partial<Entity> = {
  tag: 'updated',
};

const invalidItem: Entity = {
  tag: 'f',
};

describe('TagController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/tag/controller-test.sqlite',
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
        .post('/tag')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET tag] should get all tag entities.', async () => {
    return await request(app.getHttpServer())
      .get('/tag')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET tag/:id] should get a tag entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/tag/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /tag/?take=1&skip=1] should paginate the tag entities.', async () => {
    return request(app.getHttpServer())
      .get('/tag/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST tag] should NOT create the tag entity with INVALID tag property', () => {
    return request(app.getHttpServer())
      .post('/tag')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'tag must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT tag/:id] should update the tag by id.', async () => {
    return request(app.getHttpServer())
      .put('/tag/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE tag/:id] should delete the tag by id.', async () => {
    return request(app.getHttpServer())
      .delete('/tag/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
