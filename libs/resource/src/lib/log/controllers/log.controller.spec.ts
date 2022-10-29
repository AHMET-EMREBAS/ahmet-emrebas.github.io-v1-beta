import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Log as Entity,
  LogView as EntityView,
} from '../entities';
import { LogService as Service } from '../services';
import { LogController as Controller } from './log.controller';

const validTestData: Entity[] = [
  { log: 'test log 1' },
  { log: 'test log 2' },
  { log: 'test log 3' },
  { log: 'test log 4' },
  { log: 'test log 5' },
];

const updatedItem: Partial<Entity> = {
  log: 'updated',
};

const invalidItem: Entity = {
  log: 'f',
};

describe('LogController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/log/controller-test.sqlite',
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
        .post('/log')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET log] should get all log entities.', async () => {
    return await request(app.getHttpServer())
      .get('/log')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET log/:id] should get a log entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/log/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /log/?take=1&skip=1] should paginate the log entities.', async () => {
    return request(app.getHttpServer())
      .get('/log/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST log] should NOT create the log entity with INVALID log property', () => {
    return request(app.getHttpServer())
      .post('/log')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'log must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT log/:id] should update the log by id.', async () => {
    return request(app.getHttpServer())
      .put('/log/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE log/:id] should delete the log by id.', async () => {
    return request(app.getHttpServer())
      .delete('/log/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
