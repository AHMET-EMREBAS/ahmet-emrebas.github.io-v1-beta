import { CrudController } from 'api-core';
import { Product, ProductCreateDTO, ProductUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ProductService } from './product.service';

@ApiTags(ProductController.name)
@Controller()
export class ProductController extends CrudController<Product>({
  entity: Product,
  createDTO: ProductCreateDTO,
  updateDTO: ProductUpdateDTO,
  singularName: 'product',
  pluralName: 'products',
}) {
  constructor(service: ProductService) {
    super(service);
  }
}
