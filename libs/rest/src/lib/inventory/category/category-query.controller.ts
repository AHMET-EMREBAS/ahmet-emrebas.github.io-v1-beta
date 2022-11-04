import { GetQueryController, ManagePermission } from 'core';
import { Category, CategoryView } from 'models/inventory/category';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryNames } from './category.names';
import { CategoryService } from './category.service';

@ApiTags('[ Query / Relation ] Category')
@ManagePermission(CategoryNames.SINGULAR_NAME)
@Controller(CategoryNames.SINGULAR_NAME)
export class CategoryQueryController extends GetQueryController<
  Category,
  CategoryView
>(CategoryNames.SINGULAR_NAME) {
  constructor(service: CategoryService) {
    super(service);
  }
}
