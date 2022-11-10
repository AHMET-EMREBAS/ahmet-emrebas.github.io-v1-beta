import { AuthModule } from 'auth';
import { join } from 'path';

import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategorySubscriber, CategoryModule } from 'rest/inventory/category';
import {
  DepartmentSubscriber,
  DepartmentModule,
} from 'rest/inventory/department';
import { FeatureSubscriber, FeatureModule } from 'rest/inventory/feature';
import { LocationSubscriber, LocationModule } from 'rest/inventory/location';
import { OrderSubscriber, OrderModule } from 'rest/inventory/order';
import {
  PermissionSubscriber,
  PermissionModule,
} from 'rest/inventory/permission';
import { PriceSubscriber, PriceModule } from 'rest/inventory/price';
import {
  PricelevelSubscriber,
  PricelevelModule,
} from 'rest/inventory/pricelevel';
import { ProductSubscriber, ProductModule } from 'rest/inventory/product';
import { QuantitySubscriber, QuantityModule } from 'rest/inventory/quantity';
import { ResourceSubscriber, ResourceModule } from 'rest/inventory/resource';
import { SkuSubscriber, SkuModule } from 'rest/inventory/sku';
import { StoreSubscriber, StoreModule } from 'rest/inventory/store';
import {
  TransactionSubscriber,
  TransactionModule,
} from 'rest/inventory/transaction';
import { UserSubscriber, UserModule } from 'rest/inventory/user';
import { VariantSubscriber, VariantModule } from 'rest/inventory/variant';

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
        CategorySubscriber,
        DepartmentSubscriber,
        FeatureSubscriber,
        LocationSubscriber,
        OrderSubscriber,
        PermissionSubscriber,
        PriceSubscriber,
        PricelevelSubscriber,
        ProductSubscriber,
        QuantitySubscriber,
        ResourceSubscriber,
        SkuSubscriber,
        StoreSubscriber,
        TransactionSubscriber,
        UserSubscriber,
        VariantSubscriber,
      ],
      synchronize: true,
      dropSchema: true,
    }),
    AuthModule,

    CategoryModule,

    DepartmentModule,

    FeatureModule,

    LocationModule,

    OrderModule,

    PermissionModule,

    PriceModule,

    PricelevelModule,

    ProductModule,

    QuantityModule,

    ResourceModule,

    SkuModule,

    StoreModule,

    TransactionModule,

    UserModule,

    VariantModule,
  ],
})
export class AppModule {}
