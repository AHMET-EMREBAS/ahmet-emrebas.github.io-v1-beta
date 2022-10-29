import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  User as Entity,
  UserView as EntityView,
} from '../entities';
import { UserService as Service } from '../services';
import { UserController as Controller } from './user.controller';

const validTestData: Entity[] = [
  { user: 'test user 1' },
  { user: 'test user 2' },
  { user: 'test user 3' },
  { user: 'test user 4' },
  { user: 'test user 5' },
];

const updatedItem: Partial<Entity> = {
  user: 'updated',
};

const invalidItem: Entity = {
  user: 'f',
};

describe('UserController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/user/controller-test.sqlite',
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
        .post('/user')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET user] should get all user entities.', async () => {
    return await request(app.getHttpServer())
      .get('/user')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET user/:id] should get a user entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/user/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /user/?take=1&skip=1] should paginate the user entities.', async () => {
    return request(app.getHttpServer())
      .get('/user/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST user] should NOT create the user entity with INVALID user property', () => {
    return request(app.getHttpServer())
      .post('/user')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'user must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT user/:id] should update the user by id.', async () => {
    return request(app.getHttpServer())
      .put('/user/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE user/:id] should delete the user by id.', async () => {
    return request(app.getHttpServer())
      .delete('/user/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
