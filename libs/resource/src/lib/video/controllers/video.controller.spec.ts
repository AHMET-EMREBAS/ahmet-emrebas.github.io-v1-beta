import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Video as Entity,
  VideoView as EntityView,
} from '../entities';
import { VideoService as Service } from '../services';
import { VideoController as Controller } from './video.controller';

const validTestData: Entity[] = [
  { video: 'test video 1' },
  { video: 'test video 2' },
  { video: 'test video 3' },
  { video: 'test video 4' },
  { video: 'test video 5' },
];

const updatedItem: Partial<Entity> = {
  video: 'updated',
};

const invalidItem: Entity = {
  video: 'f',
};

describe('VideoController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/video/controller-test.sqlite',
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
        .post('/video')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET video] should get all video entities.', async () => {
    return await request(app.getHttpServer())
      .get('/video')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET video/:id] should get a video entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/video/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /video/?take=1&skip=1] should paginate the video entities.', async () => {
    return request(app.getHttpServer())
      .get('/video/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST video] should NOT create the video entity with INVALID video property', () => {
    return request(app.getHttpServer())
      .post('/video')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'video must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT video/:id] should update the video by id.', async () => {
    return request(app.getHttpServer())
      .put('/video/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE video/:id] should delete the video by id.', async () => {
    return request(app.getHttpServer())
      .delete('/video/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
