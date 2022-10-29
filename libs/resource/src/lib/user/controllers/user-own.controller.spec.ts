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
import { UserOwnController as Controller } from './user-own.controller';

const validTestData: Entity[] = [
  { user: 'test user 1', createdBy: 1 },
  { user: 'test user 2', createdBy: 2 },
  { user: 'test user 3', createdBy: 3 },
  { user: 'test user 4', createdBy: 100 },
  { user: 'test user 5', createdBy: 100 },
  { user: 'test user 6', createdBy: 100 },
  { user: 'test user 7', createdBy: 100 },
  { user: 'test user 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  user: 'updated',
};

const invalidItem: Entity = {
  user: 'f',
};

describe('UserOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/user-own/controller-test.sqlite',
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

  it('[/GET ownuser] should get all own user entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownuser')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownuser/:id] should get a user entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownuser/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownuser/?take=1&skip=1] should paginate the user entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownuser/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownuser/:id] should update the user by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownuser/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownuser/:id] should delete the user by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownuser/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
