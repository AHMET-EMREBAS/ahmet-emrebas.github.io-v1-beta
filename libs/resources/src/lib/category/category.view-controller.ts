import { QueryController } from 'api-core';
import { CategoryView } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryViewService } from './category.view-service';

@ApiTags(CategoryViewController.name)
@Controller()
export class CategoryViewController extends QueryController<CategoryView>({
  entity: CategoryView,
  singularName: 'viewcategory',
  pluralName: 'viewcategories',
}) {
  constructor(service: CategoryViewService) {
    super(service);
  }
}
