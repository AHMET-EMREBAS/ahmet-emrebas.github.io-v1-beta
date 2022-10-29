import { QueryDTO } from 'core';
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
import { AdController as Controller } from './ad.controller';

const validTestData: Entity[] = [
  { ad: 'test ad 1' },
  { ad: 'test ad 2' },
  { ad: 'test ad 3' },
  { ad: 'test ad 4' },
  { ad: 'test ad 5' },
];

const updatedItem: Partial<Entity> = {
  ad: 'updated',
};

const invalidItem: Entity = {
  ad: 'f',
};

describe('AdController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/ad/controller-test.sqlite',
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
        .post('/ad')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET ad] should get all ad entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ad')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET ad/:id] should get a ad entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ad/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /ad/?take=1&skip=1] should paginate the ad entities.', async () => {
    return request(app.getHttpServer())
      .get('/ad/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST ad] should NOT create the ad entity with INVALID ad property', () => {
    return request(app.getHttpServer())
      .post('/ad')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'ad must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT ad/:id] should update the ad by id.', async () => {
    return request(app.getHttpServer())
      .put('/ad/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ad/:id] should delete the ad by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ad/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
