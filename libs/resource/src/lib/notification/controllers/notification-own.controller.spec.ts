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
import { NotificationOwnController as Controller } from './notification-own.controller';

const validTestData: Entity[] = [
  { notification: 'test notification 1', createdBy: 1 },
  { notification: 'test notification 2', createdBy: 2 },
  { notification: 'test notification 3', createdBy: 3 },
  { notification: 'test notification 4', createdBy: 100 },
  { notification: 'test notification 5', createdBy: 100 },
  { notification: 'test notification 6', createdBy: 100 },
  { notification: 'test notification 7', createdBy: 100 },
  { notification: 'test notification 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  notification: 'updated',
};

const invalidItem: Entity = {
  notification: 'f',
};

describe('NotificationOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/notification-own/controller-test.sqlite',
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

  it('[/GET ownnotification] should get all own notification entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownnotification')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownnotification/:id] should get a notification entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownnotification/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownnotification/?take=1&skip=1] should paginate the notification entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownnotification/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownnotification/:id] should update the notification by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownnotification/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownnotification/:id] should delete the notification by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownnotification/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
