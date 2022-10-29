import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Issue as Entity,
  IssueView as EntityView,
} from '../entities';
import { IssueService as Service } from '../services';
import { IssueOwnController as Controller } from './issue-own.controller';

const validTestData: Entity[] = [
  { issue: 'test issue 1', createdBy: 1 },
  { issue: 'test issue 2', createdBy: 2 },
  { issue: 'test issue 3', createdBy: 3 },
  { issue: 'test issue 4', createdBy: 100 },
  { issue: 'test issue 5', createdBy: 100 },
  { issue: 'test issue 6', createdBy: 100 },
  { issue: 'test issue 7', createdBy: 100 },
  { issue: 'test issue 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  issue: 'updated',
};

const invalidItem: Entity = {
  issue: 'f',
};

describe('IssueOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/issue-own/controller-test.sqlite',
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

  it('[/GET ownissue] should get all own issue entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownissue')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownissue/:id] should get a issue entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownissue/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownissue/?take=1&skip=1] should paginate the issue entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownissue/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownissue/:id] should update the issue by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownissue/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownissue/:id] should delete the issue by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownissue/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
