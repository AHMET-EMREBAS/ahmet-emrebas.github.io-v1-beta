import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Permission as Entity,
  PermissionView as EntityView,
} from '../entities';
import { PermissionService as Service } from '../services';
import { PermissionController as Controller } from './permission.controller';

const validTestData: Entity[] = [
  { permission: 'test permission 1' },
  { permission: 'test permission 2' },
  { permission: 'test permission 3' },
  { permission: 'test permission 4' },
  { permission: 'test permission 5' },
];

const updatedItem: Partial<Entity> = {
  permission: 'updated',
};

const invalidItem: Entity = {
  permission: 'f',
};

describe('PermissionController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/permission/controller-test.sqlite',
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
        .post('/permission')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET permission] should get all permission entities.', async () => {
    return await request(app.getHttpServer())
      .get('/permission')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET permission/:id] should get a permission entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/permission/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /permission/?take=1&skip=1] should paginate the permission entities.', async () => {
    return request(app.getHttpServer())
      .get('/permission/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST permission] should NOT create the permission entity with INVALID permission property', () => {
    return request(app.getHttpServer())
      .post('/permission')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'permission must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT permission/:id] should update the permission by id.', async () => {
    return request(app.getHttpServer())
      .put('/permission/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE permission/:id] should delete the permission by id.', async () => {
    return request(app.getHttpServer())
      .delete('/permission/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
