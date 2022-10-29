import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Notification as Entity,
  NotificationView as EntityView,
} from '../entities';
import { NotificationService as Service } from '../services';
import { NotificationController as Controller } from './notification.controller';

const validTestData: Entity[] = [
  { notification: 'test notification 1' },
  { notification: 'test notification 2' },
  { notification: 'test notification 3' },
  { notification: 'test notification 4' },
  { notification: 'test notification 5' },
];

const updatedItem: Partial<Entity> = {
  notification: 'updated',
};

const invalidItem: Entity = {
  notification: 'f',
};

describe('NotificationController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/notification/controller-test.sqlite',
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
        .post('/notification')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET notification] should get all notification entities.', async () => {
    return await request(app.getHttpServer())
      .get('/notification')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET notification/:id] should get a notification entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/notification/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /notification/?take=1&skip=1] should paginate the notification entities.', async () => {
    return request(app.getHttpServer())
      .get('/notification/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST notification] should NOT create the notification entity with INVALID notification property', () => {
    return request(app.getHttpServer())
      .post('/notification')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'notification must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT notification/:id] should update the notification by id.', async () => {
    return request(app.getHttpServer())
      .put('/notification/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE notification/:id] should delete the notification by id.', async () => {
    return request(app.getHttpServer())
      .delete('/notification/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
