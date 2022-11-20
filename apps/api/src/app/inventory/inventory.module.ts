import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './auth';
import { CategoryModule } from './rest/category';
import { DepartmentModule } from './rest/department';
import { MessageModule } from './rest/message';
import { PermissionModule } from './rest/permission';
import { PriceModule } from './rest/price';
import { PricelevelModule } from './rest/pricelevel';
import { ProductModule } from './rest/product';
import { QuantityModule } from './rest/quantity';
import { SkuModule } from './rest/sku';
import { StoreModule } from './rest/store';
import { UserModule } from './rest/user';

export const ResouceModules = [];

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: 'tmp/database/inventory.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    ProductModule,
    PriceModule,
    DepartmentModule,
    CategoryModule,
    SkuModule,
    QuantityModule,
    PricelevelModule,
    StoreModule,
    SkuModule,
    MessageModule,
    UserModule,
    PermissionModule,
  ],
})
export class InventoryModule {}
