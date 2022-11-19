import { IID } from 'common/base';
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
    private readonly permissionService: PermissionService,
    private readonly userService: UserService
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
      'Product',
      'Category',
      'Department',
      'Price',
      'Quantity',
      'Store',
      'Pricelevel',
      'User',
      'Permission',
      'Sku',
    ];

    const operations = ['read', 'write', 'update', 'delete', 'functions'];

    for (const o of operations) {
      for (const r of resources) {
        await this.permissionService.save({
          name: [o, r].join(''),
          description: [o, r].map(upperFirst).join(' '),
        });
      }
    }

    await this.userService.save({
      username: 'user@example.com',
      password: 'user@example.com',
      permission: (await this.permissionService.find({
        select: ['id'],
      })) as IID[],
    });
  }
}
