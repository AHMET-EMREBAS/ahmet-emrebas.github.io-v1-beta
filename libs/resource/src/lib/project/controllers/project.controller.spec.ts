import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Project as Entity,
  ProjectView as EntityView,
} from '../entities';
import { ProjectService as Service } from '../services';
import { ProjectController as Controller } from './project.controller';

const validTestData: Entity[] = [
  { project: 'test project 1' },
  { project: 'test project 2' },
  { project: 'test project 3' },
  { project: 'test project 4' },
  { project: 'test project 5' },
];

const updatedItem: Partial<Entity> = {
  project: 'updated',
};

const invalidItem: Entity = {
  project: 'f',
};

describe('ProjectController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/project/controller-test.sqlite',
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
        .post('/project')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET project] should get all project entities.', async () => {
    return await request(app.getHttpServer())
      .get('/project')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET project/:id] should get a project entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/project/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /project/?take=1&skip=1] should paginate the project entities.', async () => {
    return request(app.getHttpServer())
      .get('/project/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST project] should NOT create the project entity with INVALID project property', () => {
    return request(app.getHttpServer())
      .post('/project')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'project must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT project/:id] should update the project by id.', async () => {
    return request(app.getHttpServer())
      .put('/project/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE project/:id] should delete the project by id.', async () => {
    return request(app.getHttpServer())
      .delete('/project/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
