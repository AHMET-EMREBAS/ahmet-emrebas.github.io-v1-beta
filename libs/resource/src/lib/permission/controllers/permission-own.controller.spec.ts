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
import { PermissionOwnController as Controller } from './permission-own.controller';

const validTestData: Entity[] = [
  { permission: 'test permission 1', createdBy: 1 },
  { permission: 'test permission 2', createdBy: 2 },
  { permission: 'test permission 3', createdBy: 3 },
  { permission: 'test permission 4', createdBy: 100 },
  { permission: 'test permission 5', createdBy: 100 },
  { permission: 'test permission 6', createdBy: 100 },
  { permission: 'test permission 7', createdBy: 100 },
  { permission: 'test permission 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  permission: 'updated',
};

const invalidItem: Entity = {
  permission: 'f',
};

describe('PermissionOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/permission-own/controller-test.sqlite',
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

  it('[/GET ownpermission] should get all own permission entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownpermission')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownpermission/:id] should get a permission entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownpermission/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownpermission/?take=1&skip=1] should paginate the permission entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownpermission/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownpermission/:id] should update the permission by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownpermission/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownpermission/:id] should delete the permission by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownpermission/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
