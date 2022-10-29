import { QueryDTO } from 'core';
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
import { SprintController as Controller } from './sprint.controller';

const validTestData: Entity[] = [
  { sprint: 'test sprint 1' },
  { sprint: 'test sprint 2' },
  { sprint: 'test sprint 3' },
  { sprint: 'test sprint 4' },
  { sprint: 'test sprint 5' },
];

const updatedItem: Partial<Entity> = {
  sprint: 'updated',
};

const invalidItem: Entity = {
  sprint: 'f',
};

describe('SprintController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sprint/controller-test.sqlite',
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
        .post('/sprint')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET sprint] should get all sprint entities.', async () => {
    return await request(app.getHttpServer())
      .get('/sprint')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET sprint/:id] should get a sprint entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/sprint/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /sprint/?take=1&skip=1] should paginate the sprint entities.', async () => {
    return request(app.getHttpServer())
      .get('/sprint/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST sprint] should NOT create the sprint entity with INVALID sprint property', () => {
    return request(app.getHttpServer())
      .post('/sprint')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'sprint must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT sprint/:id] should update the sprint by id.', async () => {
    return request(app.getHttpServer())
      .put('/sprint/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE sprint/:id] should delete the sprint by id.', async () => {
    return request(app.getHttpServer())
      .delete('/sprint/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
