import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Pricelevel as Entity,
  PricelevelView as EntityView,
} from '../entities';
import { PricelevelService as Service } from '../services';
import { PricelevelController as Controller } from './pricelevel.controller';

const validTestData: Entity[] = [
  { pricelevel: 'test pricelevel 1' },
  { pricelevel: 'test pricelevel 2' },
  { pricelevel: 'test pricelevel 3' },
  { pricelevel: 'test pricelevel 4' },
  { pricelevel: 'test pricelevel 5' },
];

const updatedItem: Partial<Entity> = {
  pricelevel: 'updated',
};

const invalidItem: Entity = {
  pricelevel: 'f',
};

describe('PricelevelController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/pricelevel/controller-test.sqlite',
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
        .post('/pricelevel')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET pricelevel] should get all pricelevel entities.', async () => {
    return await request(app.getHttpServer())
      .get('/pricelevel')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET pricelevel/:id] should get a pricelevel entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/pricelevel/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /pricelevel/?take=1&skip=1] should paginate the pricelevel entities.', async () => {
    return request(app.getHttpServer())
      .get('/pricelevel/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST pricelevel] should NOT create the pricelevel entity with INVALID pricelevel property', () => {
    return request(app.getHttpServer())
      .post('/pricelevel')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'pricelevel must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT pricelevel/:id] should update the pricelevel by id.', async () => {
    return request(app.getHttpServer())
      .put('/pricelevel/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE pricelevel/:id] should delete the pricelevel by id.', async () => {
    return request(app.getHttpServer())
      .delete('/pricelevel/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
