import { AuthModule } from 'auth';
import { join } from 'path';
import {
  CategoryModule,
  CategorySubscriber,
} from 'rest/inventory/category';
import {
  DepartmentModule,
  DepartmentSubscriber,
} from 'rest/inventory/department';
import {
  OrderModule,
  OrderSubscriber,
} from 'rest/inventory/order';
import {
  PriceModule,
  PriceSubscriber,
} from 'rest/inventory/price';
import {
  PricelevelModule,
  PricelevelSubscriber,
} from 'rest/inventory/pricelevel';
import {
  ProductModule,
  ProductSubscriber,
} from 'rest/inventory/product';
import {
  QuantityModule,
  QuantitySubscriber,
} from 'rest/inventory/quantity';
import {
  SampleModule,
  SampleSubscriber,
} from 'rest/inventory/sample';
import {
  StoreModule,
  StoreSubscriber,
} from 'rest/inventory/store';
import {
  TransactionModule,
  TransactionSubscriber,
} from 'rest/inventory/transaction';

import {
  CacheModule,
  Module,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'public'),
    }),
    ScheduleModule.forRoot(),
    EventEmitterModule.forRoot({
      global: true,
      wildcard: true,
      delimiter: '.',
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
    }),
    CacheModule.register({
      isGlobal: true,
      ttl: 5,
      max: 10,
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/main.sqlite',
      autoLoadEntities: true,
      subscribers: [],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,

    ProductModule,

    CategoryModule,

    DepartmentModule,

    PricelevelModule,

    StoreModule,

    PriceModule,

    QuantityModule,

    OrderModule,

    TransactionModule,

    SampleModule,
  ],
  providers: [
    ProductSubscriber,
    CategorySubscriber,
    DepartmentSubscriber,
    PricelevelSubscriber,
    StoreSubscriber,
    PriceSubscriber,
    QuantitySubscriber,
    OrderSubscriber,
    TransactionSubscriber,
    SampleSubscriber,
  ],
})
export class AppModule {}
