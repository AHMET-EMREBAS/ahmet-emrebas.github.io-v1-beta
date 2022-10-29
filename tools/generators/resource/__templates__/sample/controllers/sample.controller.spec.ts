import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Sample as Entity,
  SampleView as EntityView,
} from '../entities';
import { SampleService as Service } from '../services';
import { SampleController as Controller } from './sample.controller';

const validTestData: Entity[] = [
  { sample: 'test sample 1' },
  { sample: 'test sample 2' },
  { sample: 'test sample 3' },
  { sample: 'test sample 4' },
  { sample: 'test sample 5' },
];

const updatedItem: Partial<Entity> = {
  sample: 'updated',
};

const invalidItem: Entity = {
  sample: 'f',
};

describe('SampleController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sample/controller-test.sqlite',
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
        .post('/sample')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET sample] should get all sample entities.', async () => {
    return await request(app.getHttpServer())
      .get('/sample')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET sample/:id] should get a sample entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/sample/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /sample/?take=1&skip=1] should paginate the sample entities.', async () => {
    return request(app.getHttpServer())
      .get('/sample/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST sample] should NOT create the sample entity with INVALID sample property', () => {
    return request(app.getHttpServer())
      .post('/sample')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'sample must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT sample/:id] should update the sample by id.', async () => {
    return request(app.getHttpServer())
      .put('/sample/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE sample/:id] should delete the sample by id.', async () => {
    return request(app.getHttpServer())
      .delete('/sample/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
