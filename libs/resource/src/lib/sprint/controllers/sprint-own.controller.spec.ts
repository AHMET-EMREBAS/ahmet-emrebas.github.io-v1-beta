import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sprint as Entity,
  SprintView as EntityView,
} from '../entities';
import { SprintService as Service } from '../services';
import { SprintOwnController as Controller } from './sprint-own.controller';

const validTestData: Entity[] = [
  { sprint: 'test sprint 1', createdBy: 1 },
  { sprint: 'test sprint 2', createdBy: 2 },
  { sprint: 'test sprint 3', createdBy: 3 },
  { sprint: 'test sprint 4', createdBy: 100 },
  { sprint: 'test sprint 5', createdBy: 100 },
  { sprint: 'test sprint 6', createdBy: 100 },
  { sprint: 'test sprint 7', createdBy: 100 },
  { sprint: 'test sprint 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  sprint: 'updated',
};

const invalidItem: Entity = {
  sprint: 'f',
};

describe('SprintOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sprint-own/controller-test.sqlite',
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

  it('[/GET ownsprint] should get all own sprint entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownsprint')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownsprint/:id] should get a sprint entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownsprint/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownsprint/?take=1&skip=1] should paginate the sprint entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownsprint/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownsprint/:id] should update the sprint by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownsprint/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownsprint/:id] should delete the sprint by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownsprint/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
