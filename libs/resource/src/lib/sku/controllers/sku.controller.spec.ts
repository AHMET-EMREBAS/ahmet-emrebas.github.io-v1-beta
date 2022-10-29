import { QueryDTO } from 'core';
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
import { SkuController as Controller } from './sku.controller';

const validTestData: Entity[] = [
  { sku: 'test sku 1' },
  { sku: 'test sku 2' },
  { sku: 'test sku 3' },
  { sku: 'test sku 4' },
  { sku: 'test sku 5' },
];

const updatedItem: Partial<Entity> = {
  sku: 'updated',
};

const invalidItem: Entity = {
  sku: 'f',
};

describe('SkuController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sku/controller-test.sqlite',
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
        .post('/sku')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET sku] should get all sku entities.', async () => {
    return await request(app.getHttpServer())
      .get('/sku')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET sku/:id] should get a sku entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/sku/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /sku/?take=1&skip=1] should paginate the sku entities.', async () => {
    return request(app.getHttpServer())
      .get('/sku/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST sku] should NOT create the sku entity with INVALID sku property', () => {
    return request(app.getHttpServer())
      .post('/sku')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'sku must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT sku/:id] should update the sku by id.', async () => {
    return request(app.getHttpServer())
      .put('/sku/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE sku/:id] should delete the sku by id.', async () => {
    return request(app.getHttpServer())
      .delete('/sku/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
