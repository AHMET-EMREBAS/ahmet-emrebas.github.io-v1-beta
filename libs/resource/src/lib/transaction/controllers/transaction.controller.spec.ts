import { QueryDTO } from 'core';
import * as request from 'supertest';

import { NestApplication } from '@nestjs/core';
import {
  Test,
  TestingModule,
} from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Transaction as Entity,
  TransactionView as EntityView,
} from '../entities';
import { TransactionService as Service } from '../services';
import { TransactionController as Controller } from './transaction.controller';

const validTestData: Entity[] = [
  { transaction: 'test transaction 1' },
  { transaction: 'test transaction 2' },
  { transaction: 'test transaction 3' },
  { transaction: 'test transaction 4' },
  { transaction: 'test transaction 5' },
];

const updatedItem: Partial<Entity> = {
  transaction: 'updated',
};

const invalidItem: Entity = {
  transaction: 'f',
};

describe('TransactionController', () => {
  let app: NestApplication;
  let service: Service;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/transaction/controller-test.sqlite',
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
        .post('/transaction')
        .send({ ...item });
    }
  });

  afterAll(async () => await app.close());

  it('[/GET transaction] should get all transaction entities.', async () => {
    return await request(app.getHttpServer())
      .get('/transaction')
      .expect(200)
      .expect((await service.viewAll(new QueryDTO())).map((e) => ({ ...e })));
  });

  it('[/GET transaction/:id] should get a transaction entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/transaction/1')
      .expect(200)
      .expect({ ...(await service.viewOne(1)) });
  });

  it('[/GET /transaction/?take=1&skip=1] should paginate the transaction entities.', async () => {
    return request(app.getHttpServer())
      .get('/transaction/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length === 1).toBeTruthy();
        expect(data.body[0].id === 2).toBeTruthy();
      });
  });

  it('[/POST transaction] should NOT create the transaction entity with INVALID transaction property', () => {
    return request(app.getHttpServer())
      .post('/transaction')
      .send({ ...invalidItem })
      .expect(400)
      .then((data) => {
        expect(data.body?.message[0]).toBe(
          'transaction must be longer than or equal to 3 characters'
        );
      });
  });

  it('[/PUT transaction/:id] should update the transaction by id.', async () => {
    return request(app.getHttpServer())
      .put('/transaction/1')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE transaction/:id] should delete the transaction by id.', async () => {
    return request(app.getHttpServer())
      .delete('/transaction/1')
      .expect(200)
      .then(async () => {
        expect(await service.count()).toBe(4);
      });
  });
});
