import { QueryDTO } from 'core';
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
import { EmailController as Controller } from './email.controller';

const validTestData: Entity[] = [
  { email: 'test email 1' },
  { email: 'test email 2' },
  { email: 'test email 3' },
  { email: 'test email 4' },
  { email: 'test email 5' },
];

const updatedItem: Partial<Entity> = {
  email: 'updated',
};

const invalidItem: Entity = {
  email: 'f',
};

describe('EmailController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/email/controller-test.sqlite',
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
        .post('/email')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET email] should get all email entities.', async () => {
    return await request(app.getHttpServer())
      .get('/email')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET email/:id] should get a email entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/email/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /email/?take=1&skip=1] should paginate the email entities.', async () => {
    return request(app.getHttpServer())
      .get('/email/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST email] should NOT create the email entity with INVALID email property', () => {
    return request(app.getHttpServer())
      .post('/email')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'email must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT email/:id] should update the email by id.', async () => {
    return request(app.getHttpServer())
      .put('/email/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE email/:id] should delete the email by id.', async () => {
    return request(app.getHttpServer())
      .delete('/email/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
