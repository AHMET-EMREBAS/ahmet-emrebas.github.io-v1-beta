import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Email as Entity,
  EmailView as EntityView,
} from '../entities';
import { EmailService as Service } from '../services';
import { EmailOwnController as Controller } from './email-own.controller';

const validTestData: Entity[] = [
  { email: 'test email 1', createdBy: 1 },
  { email: 'test email 2', createdBy: 2 },
  { email: 'test email 3', createdBy: 3 },
  { email: 'test email 4', createdBy: 100 },
  { email: 'test email 5', createdBy: 100 },
  { email: 'test email 6', createdBy: 100 },
  { email: 'test email 7', createdBy: 100 },
  { email: 'test email 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  email: 'updated',
};

const invalidItem: Entity = {
  email: 'f',
};

describe('EmailOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/email-own/controller-test.sqlite',
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

  it('[/GET ownemail] should get all own email entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownemail')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownemail/:id] should get a email entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownemail/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownemail/?take=1&skip=1] should paginate the email entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownemail/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownemail/:id] should update the email by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownemail/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownemail/:id] should delete the email by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownemail/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
