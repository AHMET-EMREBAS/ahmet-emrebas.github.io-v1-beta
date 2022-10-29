import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sku as Entity,
  SkuView as EntityView,
} from '../entities';
import { SkuService as Service } from '../services';
import { SkuOwnController as Controller } from './sku-own.controller';

const validTestData: Entity[] = [
  { sku: 'test sku 1', createdBy: 1 },
  { sku: 'test sku 2', createdBy: 2 },
  { sku: 'test sku 3', createdBy: 3 },
  { sku: 'test sku 4', createdBy: 100 },
  { sku: 'test sku 5', createdBy: 100 },
  { sku: 'test sku 6', createdBy: 100 },
  { sku: 'test sku 7', createdBy: 100 },
  { sku: 'test sku 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  sku: 'updated',
};

const invalidItem: Entity = {
  sku: 'f',
};

describe('SkuOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sku-own/controller-test.sqlite',
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

  it('[/GET ownsku] should get all own sku entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownsku')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownsku/:id] should get a sku entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownsku/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownsku/?take=1&skip=1] should paginate the sku entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownsku/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownsku/:id] should update the sku by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownsku/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownsku/:id] should delete the sku by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownsku/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
