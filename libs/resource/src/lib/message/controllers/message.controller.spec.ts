import { QueryDTO } from 'core';
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
import { MessageController as Controller } from './message.controller';

const validTestData: Entity[] = [
  { message: 'test message 1' },
  { message: 'test message 2' },
  { message: 'test message 3' },
  { message: 'test message 4' },
  { message: 'test message 5' },
];

const updatedItem: Partial<Entity> = {
  message: 'updated',
};

const invalidItem: Entity = {
  message: 'f',
};

describe('MessageController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/message/controller-test.sqlite',
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
        .post('/message')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET message] should get all message entities.', async () => {
    return await request(app.getHttpServer())
      .get('/message')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET message/:id] should get a message entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/message/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /message/?take=1&skip=1] should paginate the message entities.', async () => {
    return request(app.getHttpServer())
      .get('/message/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST message] should NOT create the message entity with INVALID message property', () => {
    return request(app.getHttpServer())
      .post('/message')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'message must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT message/:id] should update the message by id.', async () => {
    return request(app.getHttpServer())
      .put('/message/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE message/:id] should delete the message by id.', async () => {
    return request(app.getHttpServer())
      .delete('/message/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
