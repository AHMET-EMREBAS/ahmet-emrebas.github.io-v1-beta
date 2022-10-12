import { QueryController } from 'api-core';
import { ProductView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ProductViewService } from './product.view-service';

@ApiTags(ProductViewController.name)
@Controller()
export class ProductViewController extends QueryController<ProductView>({
  entity: ProductView,
  singularName: 'viewproduct',
  pluralName: 'viewproducts',
}) {
  constructor(service: ProductViewService) {
    super(service);
  }
}
