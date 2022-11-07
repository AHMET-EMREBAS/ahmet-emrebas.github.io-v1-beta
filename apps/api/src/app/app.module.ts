import { AuthModule } from 'auth';
import { join } from 'path';

import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductSubscriber, ProductModule } from 'rest/inventory/product';
import { CategorySubscriber, CategoryModule } from 'rest/inventory/category';
import {
  DepartmentSubscriber,
  DepartmentModule,
} from 'rest/inventory/department';
import {
  PricelevelSubscriber,
  PricelevelModule,
} from 'rest/inventory/pricelevel';
import { StoreSubscriber, StoreModule } from 'rest/inventory/store';
import { PriceSubscriber, PriceModule } from 'rest/inventory/price';
import { QuantitySubscriber, QuantityModule } from 'rest/inventory/quantity';
import { OrderSubscriber, OrderModule } from 'rest/inventory/order';
import {
  TransactionSubscriber,
  TransactionModule,
} from 'rest/inventory/transaction';
import { SampleSubscriber, SampleModule } from 'rest/inventory/sample';

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
      subscribers: [
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
})
export class AppModule {}
