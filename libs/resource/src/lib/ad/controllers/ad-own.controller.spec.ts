import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Ad as Entity,
  AdView as EntityView,
} from '../entities';
import { AdService as Service } from '../services';
import { AdOwnController as Controller } from './ad-own.controller';

const validTestData: Entity[] = [
  { ad: 'test ad 1', createdBy: 1 },
  { ad: 'test ad 2', createdBy: 2 },
  { ad: 'test ad 3', createdBy: 3 },
  { ad: 'test ad 4', createdBy: 100 },
  { ad: 'test ad 5', createdBy: 100 },
  { ad: 'test ad 6', createdBy: 100 },
  { ad: 'test ad 7', createdBy: 100 },
  { ad: 'test ad 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  ad: 'updated',
};

const invalidItem: Entity = {
  ad: 'f',
};

describe('AdOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/ad-own/controller-test.sqlite',
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

  it('[/GET ownad] should get all own ad entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownad')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownad/:id] should get a ad entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownad/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownad/?take=1&skip=1] should paginate the ad entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownad/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownad/:id] should update the ad by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownad/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownad/:id] should delete the ad by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownad/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
