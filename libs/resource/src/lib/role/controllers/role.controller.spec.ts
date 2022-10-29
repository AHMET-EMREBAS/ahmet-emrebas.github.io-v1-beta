import { QueryDTO } from 'core';
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
import { RoleController as Controller } from './role.controller';

const validTestData: Entity[] = [
  { role: 'test role 1' },
  { role: 'test role 2' },
  { role: 'test role 3' },
  { role: 'test role 4' },
  { role: 'test role 5' },
];

const updatedItem: Partial<Entity> = {
  role: 'updated',
};

const invalidItem: Entity = {
  role: 'f',
};

describe('RoleController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/role/controller-test.sqlite',
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
        .post('/role')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET role] should get all role entities.', async () => {
    return await request(app.getHttpServer())
      .get('/role')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET role/:id] should get a role entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/role/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /role/?take=1&skip=1] should paginate the role entities.', async () => {
    return request(app.getHttpServer())
      .get('/role/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST role] should NOT create the role entity with INVALID role property', () => {
    return request(app.getHttpServer())
      .post('/role')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'role must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT role/:id] should update the role by id.', async () => {
    return request(app.getHttpServer())
      .put('/role/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE role/:id] should delete the role by id.', async () => {
    return request(app.getHttpServer())
      .delete('/role/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
