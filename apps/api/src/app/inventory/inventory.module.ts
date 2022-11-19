import { upperFirst } from 'lodash';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './models/category';
import { Department } from './models/department';
import { Message } from './models/message';
import { Permission } from './models/permission';
import { Price } from './models/price';
import { Pricelevel } from './models/pricelevel';
import { Product } from './models/product';
import { Quantity } from './models/quantity';
import { Sku } from './models/sku';
import { Store } from './models/store';
import { User } from './models/user';
import {
  CategoryModule,
  CategoryService,
} from './rest/category';
import {
  DepartmentModule,
  DepartmentService,
} from './rest/department';
import { MessageModule } from './rest/message';
import {
  PermissionModule,
  PermissionService,
} from './rest/permission';
import {
  PriceModule,
  PriceService,
} from './rest/price';
import {
  PricelevelModule,
  PricelevelService,
} from './rest/pricelevel';
import {
  ProductModule,
  ProductService,
} from './rest/product';
import {
  QuantityModule,
  QuantityService,
} from './rest/quantity';
import {
  SkuModule,
  SkuService,
} from './rest/sku';
import {
  StoreModule,
  StoreService,
} from './rest/store';
import {
  UserModule,
  UserService,
} from './rest/user';

export const ResouceModules = [
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
  TypeOrmModule.forFeature([
    Product,
    Category,
    Department,
    Quantity,
    Store,
    Price,
    Pricelevel,
    Sku,
    Message,
    User,
    Permission,
  ]),
];

@Module({
  imports: [...ResouceModules],
  providers: [
    CategoryService,
    ProductService,
    DepartmentService,
    SkuService,
    StoreService,
    QuantityService,
    PermissionService,
    UserService,
    PricelevelService,
    StoreService,
    PriceService,
  ],
})
export class InventoryModule implements OnModuleInit {
  constructor(
    private readonly priceLevelService: PricelevelService,
    private readonly storeService: StoreService,
    private readonly permissionService: PermissionService
  ) {}

  async onModuleInit() {
    const retail = await this.priceLevelService.save({ name: 'retail' });
    const wholesale = await this.priceLevelService.save({ name: 'wholesale' });
    await this.storeService.save({
      name: 'Wholesale Store',
      pricelevel: { id: wholesale.id },
    });
    await this.storeService.save({
      name: 'Retail Store',
      pricelevel: { id: retail.id },
    });
    const resources = [
      'product',
      'category',
      'department',
      'price',
      'quantity',
      'store',
      'pricelevel',
      'user',
      'permission',
      'sku',
    ];

    const operations = ['read', 'write', 'manage'];

    for (const o of operations) {
      for (const r of resources) {
        await this.permissionService.save({
          name: [o, r].join(':').toUpperCase(),
          description: [o, r].map(upperFirst).join(' '),
        });
      }
    }
  }
}
