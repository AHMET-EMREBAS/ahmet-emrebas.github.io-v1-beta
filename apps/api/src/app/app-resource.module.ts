import { CategoryModule } from 'rest/inventory/category';
import { DepartmentModule } from 'rest/inventory/department';
import { PricelevelModule } from 'rest/inventory/pricelevel';
import { ProductModule } from 'rest/inventory/product';
import { QuantityModule } from 'rest/inventory/quantity';
import { SkuModule } from 'rest/inventory/sku';
import { StoreModule } from 'rest/inventory/store';

export const ResouceModules = [
  ProductModule,
  DepartmentModule,
  CategoryModule,
  SkuModule,
  QuantityModule,
  PricelevelModule,
  StoreModule,
];
