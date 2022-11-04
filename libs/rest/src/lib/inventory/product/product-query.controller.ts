import { GetQueryController, ManagePermission } from 'core';
import { Product, ProductView } from 'models/inventory/product';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductNames } from './product.names';
import { ProductService } from './product.service';

@ApiTags('[ Query / Relation ] Product')
@ManagePermission(ProductNames.SINGULAR_NAME)
@Controller(ProductNames.SINGULAR_NAME)
export class ProductQueryController extends GetQueryController<
  Product,
  ProductView
>(ProductNames.SINGULAR_NAME) {
  constructor(service: ProductService) {
    super(service);
  }
}
