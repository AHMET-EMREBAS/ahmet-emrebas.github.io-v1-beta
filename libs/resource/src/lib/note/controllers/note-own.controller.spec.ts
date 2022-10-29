import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Note as Entity,
  NoteView as EntityView,
} from '../entities';
import { NoteService as Service } from '../services';
import { NoteOwnController as Controller } from './note-own.controller';

const validTestData: Entity[] = [
  { note: 'test note 1', createdBy: 1 },
  { note: 'test note 2', createdBy: 2 },
  { note: 'test note 3', createdBy: 3 },
  { note: 'test note 4', createdBy: 100 },
  { note: 'test note 5', createdBy: 100 },
  { note: 'test note 6', createdBy: 100 },
  { note: 'test note 7', createdBy: 100 },
  { note: 'test note 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  note: 'updated',
};

const invalidItem: Entity = {
  note: 'f',
};

describe('NoteOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/note-own/controller-test.sqlite',
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

  it('[/GET ownnote] should get all own note entities.', async () => {
    return await request(app.getHttpServer())
      .get('/ownnote')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET ownnote/:id] should get a note entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/ownnote/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /ownnote/?take=1&skip=1] should paginate the note entities.', async () => {
    return request(app.getHttpServer())
      .get('/ownnote/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT ownnote/:id] should update the note by id.', async () => {
    return request(app.getHttpServer())
      .put('/ownnote/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE ownnote/:id] should delete the note by id.', async () => {
    return request(app.getHttpServer())
      .delete('/ownnote/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
