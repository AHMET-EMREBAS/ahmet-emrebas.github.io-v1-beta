import { commerce } from 'faker';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category } from './inventory/models/category';
import { Department } from './inventory/models/department';
import { Price } from './inventory/models/price';
import { Pricelevel } from './inventory/models/pricelevel';
import { Product } from './inventory/models/product';
import { Quantity } from './inventory/models/quantity';
import { Sku } from './inventory/models/sku';
import { Store } from './inventory/models/store';
import {
  CategoryModule,
  CategoryService,
} from './inventory/rest/category';
import {
  DepartmentModule,
  DepartmentService,
} from './inventory/rest/department';
import {
  PriceModule,
  PriceService,
} from './inventory/rest/price';
import { PricelevelModule } from './inventory/rest/pricelevel';
import {
  ProductModule,
  ProductService,
} from './inventory/rest/product';
import {
  QuantityModule,
  QuantityService,
} from './inventory/rest/quantity';
import {
  SkuModule,
  SkuService,
} from './inventory/rest/sku';
import {
  StoreModule,
  StoreService,
} from './inventory/rest/store';

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
  TypeOrmModule.forFeature([
    Product,
    Category,
    Department,
    Quantity,
    Store,
    Price,
    Pricelevel,
    Sku,
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
  ],
})
export class InventoryModule implements OnModuleInit {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly departmentService: DepartmentService,
    private readonly productService: ProductService
  ) {}

  async onModuleInit() {
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
