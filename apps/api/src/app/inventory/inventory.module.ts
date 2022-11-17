import { commerce } from 'faker';

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
    PriceService,
    StoreService,
    QuantityService,
    PermissionService,
    UserService,
    PricelevelService,
    StoreService,
  ],
})
export class InventoryModule implements OnModuleInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly departmentService: DepartmentService,
    private readonly productService: ProductService,
    private readonly permissionService: PermissionService,
    private readonly priceLevelService: PricelevelService,
    private readonly storeService: StoreService,
    private readonly userService: UserService
  ) {}

  async onModuleInit() {
    for (const e of ['primary', 'secondary', 'retail', 'wholesale', 'vip']) {
      await this.priceLevelService.save({ name: e });
    }

    for (const e of ['Houston Retail Store ', 'Auistion Wholesale store']) {
      await this.storeService.save({ name: e });
    }
    for (const e of ['user1@gmail.com', 'user2@gmail.com']) {
      await this.userService.save({
        username: e,
        password: 'Password124!$',
      });
    }

    for (const e of [
      'PRODUCT',
      'USER',
      'CATEGORY',
      'DEPARTMENT',
      'SKU',
      'STORE',
      'PRICE',
    ]) {
      await this.permissionService.save({
        name: `WRITE:${e}`,
        description: `Write ${e.toLowerCase()}`,
      });
      await this.permissionService.save({
        name: `READ:${e}`,
        description: `Read ${e.toLowerCase()}`,
      });
      await this.permissionService.save({
        name: `MANAGE:${e}`,
        description: `Read ${e.toLowerCase()}`,
      });
    }

    for (const user of [1, 2]) {
      for (let i = 1; i < 21; i++) {
        await this.userService.add(user, i, 'permission');
      }
    }

    for (let i = 0; i < 50; i++) {
      let cat: any;
      let dep: any;
      try {
        cat = await this.categoryService.save({ name: commerce.department() });
      } catch (err) {
        // ignore
      }
      try {
        dep = await this.departmentService.save({
          name: commerce.department(),
        });
      } catch (err) {
        // ignore
      }

      for (let j = 0; j < 5; j++) {
        try {
          await this.productService.save({
            name: commerce.productName(),
            description: commerce.productDescription(),
            category: cat,
            department: dep,
          });
        } catch (err) {
          //
        }
      }
    }
  }
}
