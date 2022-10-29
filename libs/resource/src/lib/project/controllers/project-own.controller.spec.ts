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
import { ProjectOwnController as Controller } from './project-own.controller';

const validTestData: Entity[] = [
  { project: 'test project 1', createdBy: 1 },
  { project: 'test project 2', createdBy: 2 },
  { project: 'test project 3', createdBy: 3 },
  { project: 'test project 4', createdBy: 100 },
  { project: 'test project 5', createdBy: 100 },
  { project: 'test project 6', createdBy: 100 },
  { project: 'test project 7', createdBy: 100 },
  { project: 'test project 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  project: 'updated',
};

const invalidItem: Entity = {
  project: 'f',
};

describe('ProjectOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/project-own/controller-test.sqlite',
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

  it('[/GET ownproject] should get all own project entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownproject')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownproject/:id] should get a project entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownproject/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownproject/?take=1&skip=1] should paginate the project entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownproject/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownproject/:id] should update the project by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownproject/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownproject/:id] should delete the project by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownproject/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
