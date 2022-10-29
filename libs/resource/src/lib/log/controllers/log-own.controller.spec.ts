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
import { LogOwnController as Controller } from './log-own.controller';

const validTestData: Entity[] = [
  { log: 'test log 1', createdBy: 1 },
  { log: 'test log 2', createdBy: 2 },
  { log: 'test log 3', createdBy: 3 },
  { log: 'test log 4', createdBy: 100 },
  { log: 'test log 5', createdBy: 100 },
  { log: 'test log 6', createdBy: 100 },
  { log: 'test log 7', createdBy: 100 },
  { log: 'test log 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  log: 'updated',
};

const invalidItem: Entity = {
  log: 'f',
};

describe('LogOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/log-own/controller-test.sqlite',
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

  it('[/GET ownlog] should get all own log entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownlog')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownlog/:id] should get a log entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownlog/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownlog/?take=1&skip=1] should paginate the log entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownlog/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownlog/:id] should update the log by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownlog/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownlog/:id] should delete the log by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownlog/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
