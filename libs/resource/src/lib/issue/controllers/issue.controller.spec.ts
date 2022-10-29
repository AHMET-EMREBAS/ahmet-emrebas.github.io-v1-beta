import { QueryDTO } from 'core';
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
import { IssueController as Controller } from './issue.controller';

const validTestData: Entity[] = [
  { issue: 'test issue 1' },
  { issue: 'test issue 2' },
  { issue: 'test issue 3' },
  { issue: 'test issue 4' },
  { issue: 'test issue 5' },
];

const updatedItem: Partial<Entity> = {
  issue: 'updated',
};

const invalidItem: Entity = {
  issue: 'f',
};

describe('IssueController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/issue/controller-test.sqlite',
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
        .post('/issue')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET issue] should get all issue entities.', async () => {
    return await request(app.getHttpServer())
      .get('/issue')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET issue/:id] should get a issue entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/issue/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /issue/?take=1&skip=1] should paginate the issue entities.', async () => {
    return request(app.getHttpServer())
      .get('/issue/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST issue] should NOT create the issue entity with INVALID issue property', () => {
    return request(app.getHttpServer())
      .post('/issue')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'issue must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT issue/:id] should update the issue by id.', async () => {
    return request(app.getHttpServer())
      .put('/issue/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE issue/:id] should delete the issue by id.', async () => {
    return request(app.getHttpServer())
      .delete('/issue/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
