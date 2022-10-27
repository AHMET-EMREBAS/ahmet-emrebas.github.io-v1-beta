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
} from './entities';
import { SampleController as Controller } from './sample.controller';
import { SampleService as Service } from './sample.service';

const testData: Entity[] = [
  { sample: 'test sample 1' },
  { sample: 'test sample 2' },
  { sample: 'test sample 3' },
  { sample: 'test sample 4' },
  { sample: 'test sample 5' },
];

const validItem: Entity = {
  sample: 'fake 1',
};

const updatedItem: Partial<Entity> = {
  sample: 'updated',
};

const invalidItem: Entity = {
  sample: 'f',
};

describe('sampleController', () => {
  let app: NestApplication;
  let service: Service;

  beforeEach(async () => {
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

    // Create test data
    for (const t of testData) await service.create(t);
  });

  it('/Get sample', async () => {
    return request(app.getHttpServer())
      .get('/sample')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('/Get sample/:id', async () => {
    return request(app.getHttpServer())
      .get('/sample/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('/Get sample (Paginator) ', async () => {
    return request(app.getHttpServer())
      .get('/sample/?take=1')
      .expect(200)
      .then((data) => expect(data.body.length == 1));
  });

  it('/Post sample', async () => {
    return request(app.getHttpServer())
      .post('/sample')
      .send({ ...validItem })
      .expect(201)
      .then((data) => {
        expect(data.body['sample']).toBe(validItem.sample);
      });
  });

  it('/Post sample (Invalid Input)', () => {
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

  it('/Put sample/:id', async () => {
    return request(app.getHttpServer())
      .put('/sample/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('/Delete sample/:id', async () => {
    return request(app.getHttpServer()).delete('/sample/1').expect(200);
  });
});
