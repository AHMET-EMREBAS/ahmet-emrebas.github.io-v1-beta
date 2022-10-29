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
import { TransactionOwnController as Controller } from './transaction-own.controller';

const validTestData: Entity[] = [
  { transaction: 'test transaction 1', createdBy: 1 },
  { transaction: 'test transaction 2', createdBy: 2 },
  { transaction: 'test transaction 3', createdBy: 3 },
  { transaction: 'test transaction 4', createdBy: 100 },
  { transaction: 'test transaction 5', createdBy: 100 },
  { transaction: 'test transaction 6', createdBy: 100 },
  { transaction: 'test transaction 7', createdBy: 100 },
  { transaction: 'test transaction 8', createdBy: 100 },
];

const updatedItem: Partial<Entity> = {
  transaction: 'updated',
};

const invalidItem: Entity = {
  transaction: 'f',
};

describe('TransactionOwnController', () => {
  let app: NestApplication;
  let service: Service;
  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'better-sqlite3',
          database: 'tmp/database/transaction-own/controller-test.sqlite',
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

  it('[/GET owntransaction] should get all own transaction entities.', async () => {
    return await request(app.getHttpServer())
      .get('/owntransaction')
      .expect(200)
      .expect(
        (
          await service.viewAllOwn({}, { id: 100 } as any)
        ).map((e) => ({ ...e }))
      );
  });

  it('[/GET owntransaction/:id] should get a transaction entity by id.', async () => {
    return request(app.getHttpServer())
      .get('/owntransaction/4')
      .expect(200)
      .expect({ ...(await service.viewOne(4)) });
  });

  it('[/GET /owntransaction/?take=1&skip=1] should paginate the transaction entities.', async () => {
    return request(app.getHttpServer())
      .get('/owntransaction/?take=1&skip=1')
      .expect(200)
      .then((data) => {
        expect(data.body.length).toBe(1);
        expect(data.body[0].id).toBe(5);
      });
  });

  it('[/PUT owntransaction/:id] should update the transaction by id.', async () => {
    return request(app.getHttpServer())
      .put('/owntransaction/5')
      .send({ ...updatedItem })
      .expect(200);
  });

  it('[/DELETE owntransaction/:id] should delete the transaction by id.', async () => {
    return request(app.getHttpServer())
      .delete('/owntransaction/8')
      .expect(200)
      .then(async () => {
        expect(await service.countOwn({ id: 100 } as any)).toBe(4);
      });
  });
});
