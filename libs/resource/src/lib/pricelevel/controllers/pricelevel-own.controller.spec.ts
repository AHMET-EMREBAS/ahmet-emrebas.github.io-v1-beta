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
import { PricelevelOwnController as Controller } from './pricelevel-own.controller';

const validTestData: Entity[] = [
  { pricelevel: 'test pricelevel 1', createdBy: 1 },
  { pricelevel: 'test pricelevel 2', createdBy: 2 },
  { pricelevel: 'test pricelevel 3', createdBy: 3 },
  { pricelevel: 'test pricelevel 4', createdBy: 100 },
  { pricelevel: 'test pricelevel 5', createdBy: 100 },
  { pricelevel: 'test pricelevel 6', createdBy: 100 },
  { pricelevel: 'test pricelevel 7', createdBy: 100 },
  { pricelevel: 'test pricelevel 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  pricelevel: 'updated',
};

const invalidItem: Entity = {
  pricelevel: 'f',
};

describe('PricelevelOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/pricelevel-own/controller-test.sqlite',
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

  it('[/GET ownpricelevel] should get all own pricelevel entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownpricelevel')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownpricelevel/:id] should get a pricelevel entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownpricelevel/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownpricelevel/?take=1&skip=1] should paginate the pricelevel entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownpricelevel/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownpricelevel/:id] should update the pricelevel by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownpricelevel/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownpricelevel/:id] should delete the pricelevel by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownpricelevel/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
