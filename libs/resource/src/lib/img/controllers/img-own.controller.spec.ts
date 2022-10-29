import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Img as Entity,
  ImgView as EntityView,
} from '../entities';
import { ImgService as Service } from '../services';
import { ImgOwnController as Controller } from './img-own.controller';

const validTestData: Entity[] = [
  { img: 'test img 1', createdBy: 1 },
  { img: 'test img 2', createdBy: 2 },
  { img: 'test img 3', createdBy: 3 },
  { img: 'test img 4', createdBy: 100 },
  { img: 'test img 5', createdBy: 100 },
  { img: 'test img 6', createdBy: 100 },
  { img: 'test img 7', createdBy: 100 },
  { img: 'test img 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  img: 'updated',
};

const invalidItem: Entity = {
  img: 'f',
};

describe('ImgOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/img-own/controller-test.sqlite',
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

  it('[/GET ownimg] should get all own img entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownimg')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownimg/:id] should get a img entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownimg/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownimg/?take=1&skip=1] should paginate the img entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownimg/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownimg/:id] should update the img by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownimg/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownimg/:id] should delete the img by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownimg/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
