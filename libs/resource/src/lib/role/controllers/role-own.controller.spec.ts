import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Role as Entity,
  RoleView as EntityView,
} from '../entities';
import { RoleService as Service } from '../services';
import { RoleOwnController as Controller } from './role-own.controller';

const validTestData: Entity[] = [
  { role: 'test role 1', createdBy: 1 },
  { role: 'test role 2', createdBy: 2 },
  { role: 'test role 3', createdBy: 3 },
  { role: 'test role 4', createdBy: 100 },
  { role: 'test role 5', createdBy: 100 },
  { role: 'test role 6', createdBy: 100 },
  { role: 'test role 7', createdBy: 100 },
  { role: 'test role 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  role: 'updated',
};

const invalidItem: Entity = {
  role: 'f',
};

describe('RoleOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/role-own/controller-test.sqlite',
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

  it('[/GET ownrole] should get all own role entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownrole')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownrole/:id] should get a role entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownrole/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownrole/?take=1&skip=1] should paginate the role entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownrole/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownrole/:id] should update the role by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownrole/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownrole/:id] should delete the role by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownrole/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
