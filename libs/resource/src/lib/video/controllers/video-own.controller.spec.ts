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
import { VideoOwnController as Controller } from './video-own.controller';

const validTestData: Entity[] = [
  { video: 'test video 1', createdBy: 1 },
  { video: 'test video 2', createdBy: 2 },
  { video: 'test video 3', createdBy: 3 },
  { video: 'test video 4', createdBy: 100 },
  { video: 'test video 5', createdBy: 100 },
  { video: 'test video 6', createdBy: 100 },
  { video: 'test video 7', createdBy: 100 },
  { video: 'test video 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  video: 'updated',
};

const invalidItem: Entity = {
  video: 'f',
};

describe('VideoOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/video-own/controller-test.sqlite',
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

  it('[/GET ownvideo] should get all own video entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownvideo')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownvideo/:id] should get a video entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownvideo/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownvideo/?take=1&skip=1] should paginate the video entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownvideo/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownvideo/:id] should update the video by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownvideo/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownvideo/:id] should delete the video by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownvideo/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
