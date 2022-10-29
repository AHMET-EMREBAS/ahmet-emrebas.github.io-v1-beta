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
import { SampleOwnController as Controller } from './sample-own.controller';

const validTestData: Entity[] = [
  { sample: 'test sample 1', createdBy: 1 },
  { sample: 'test sample 2', createdBy: 2 },
  { sample: 'test sample 3', createdBy: 3 },
  { sample: 'test sample 4', createdBy: 100 },
  { sample: 'test sample 5', createdBy: 100 },
  { sample: 'test sample 6', createdBy: 100 },
  { sample: 'test sample 7', createdBy: 100 },
  { sample: 'test sample 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  sample: 'updated',
};

const invalidItem: Entity = {
  sample: 'f',
};

describe('SampleOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/sample-own/controller-test.sqlite',
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

  it('[/GET ownsample] should get all own sample entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownsample')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownsample/:id] should get a sample entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownsample/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownsample/?take=1&skip=1] should paginate the sample entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownsample/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownsample/:id] should update the sample by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownsample/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownsample/:id] should delete the sample by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownsample/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
