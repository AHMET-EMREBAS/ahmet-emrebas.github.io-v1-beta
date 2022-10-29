import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Message as Entity,
  MessageView as EntityView,
} from '../entities';
import { MessageService as Service } from '../services';
import { MessageOwnController as Controller } from './message-own.controller';

const validTestData: Entity[] = [
  { message: 'test message 1', createdBy: 1 },
  { message: 'test message 2', createdBy: 2 },
  { message: 'test message 3', createdBy: 3 },
  { message: 'test message 4', createdBy: 100 },
  { message: 'test message 5', createdBy: 100 },
  { message: 'test message 6', createdBy: 100 },
  { message: 'test message 7', createdBy: 100 },
  { message: 'test message 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  message: 'updated',
};

const invalidItem: Entity = {
  message: 'f',
};

describe('MessageOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/message-own/controller-test.sqlite',
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

  it('[/GET ownmessage] should get all own message entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownmessage')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownmessage/:id] should get a message entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownmessage/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownmessage/?take=1&skip=1] should paginate the message entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownmessage/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownmessage/:id] should update the message by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownmessage/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownmessage/:id] should delete the message by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownmessage/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
