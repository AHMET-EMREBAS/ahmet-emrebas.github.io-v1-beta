import { QueryDTO } from 'core';
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
import { ImgController as Controller } from './img.controller';

const validTestData: Entity[] = [
  { img: 'test img 1' },
  { img: 'test img 2' },
  { img: 'test img 3' },
  { img: 'test img 4' },
  { img: 'test img 5' },
];

const updatedItem: Partial<Entity> = {
  img: 'updated',
};

const invalidItem: Entity = {
  img: 'f',
};

describe('ImgController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/img/controller-test.sqlite',
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
        .post('/img')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET img] should get all img entities.', async () => {
    return await request(app.getHttpServer())
      .get('/img')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET img/:id] should get a img entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/img/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /img/?take=1&skip=1] should paginate the img entities.', async () => {
    return request(app.getHttpServer())
      .get('/img/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST img] should NOT create the img entity with INVALID img property', () => {
    return request(app.getHttpServer())
      .post('/img')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'img must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT img/:id] should update the img by id.', async () => {
    return request(app.getHttpServer())
      .put('/img/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE img/:id] should delete the img by id.', async () => {
    return request(app.getHttpServer())
      .delete('/img/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
