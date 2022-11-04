import { GetPostController, ManagePermission } from 'core';
import { CreateProductDto, UpdateProductDTO } from 'models/inventory/product';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductNames } from './product.names';
import { ProductService } from './product.service';

@ApiTags('[ Post / Update ] Product')
@ManagePermission(ProductNames.SINGULAR_NAME)
@Controller(ProductNames.SINGULAR_NAME)
export class ProductPostController extends GetPostController(
  ProductNames.SINGULAR_NAME,
  CreateProductDto,
  UpdateProductDTO
) {
  constructor(private readonly service: ProductService) {
    super(service);
  }
}
