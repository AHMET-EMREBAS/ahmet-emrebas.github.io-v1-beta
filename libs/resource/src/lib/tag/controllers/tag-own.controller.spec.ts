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
import { TagOwnController as Controller } from './tag-own.controller';

const validTestData: Entity[] = [
  { tag: 'test tag 1', createdBy: 1 },
  { tag: 'test tag 2', createdBy: 2 },
  { tag: 'test tag 3', createdBy: 3 },
  { tag: 'test tag 4', createdBy: 100 },
  { tag: 'test tag 5', createdBy: 100 },
  { tag: 'test tag 6', createdBy: 100 },
  { tag: 'test tag 7', createdBy: 100 },
  { tag: 'test tag 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  tag: 'updated',
};

const invalidItem: Entity = {
  tag: 'f',
};

describe('TagOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/tag-own/controller-test.sqlite',
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

  it('[/GET owntag] should get all own tag entities.', async () => {
    return await request(app.getHttpServer())
      .get('/owntag')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET owntag/:id] should get a tag entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/owntag/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /owntag/?take=1&skip=1] should paginate the tag entities.', async () => {
    return request(app.getHttpServer())
      .get('/owntag/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT owntag/:id] should update the tag by id.', async () => {
    return request(app.getHttpServer())
      .put('/owntag/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE owntag/:id] should delete the tag by id.', async () => {
    return request(app.getHttpServer())
      .delete('/owntag/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
