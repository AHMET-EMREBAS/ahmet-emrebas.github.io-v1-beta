import { commerce } from 'faker';
import { Category } from 'models/inventory/category';
import { Department } from 'models/inventory/department';
import { Price } from 'models/inventory/price';
import { Pricelevel } from 'models/inventory/pricelevel';
import { Product } from 'models/inventory/product';
import { Quantity } from 'models/inventory/quantity';
import { Sku } from 'models/inventory/sku';
import { Store } from 'models/inventory/store';
import {
  CategoryModule,
  CategoryService,
} from 'rest/inventory/category';
import {
  DepartmentModule,
  DepartmentService,
} from 'rest/inventory/department';
import {
  PriceModule,
  PriceService,
} from 'rest/inventory/price';
import { PricelevelModule } from 'rest/inventory/pricelevel';
import {
  ProductModule,
  ProductService,
} from 'rest/inventory/product';
import {
  QuantityModule,
  QuantityService,
} from 'rest/inventory/quantity';
import {
  SkuModule,
  SkuService,
} from 'rest/inventory/sku';
import {
  StoreModule,
  StoreService,
} from 'rest/inventory/store';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
