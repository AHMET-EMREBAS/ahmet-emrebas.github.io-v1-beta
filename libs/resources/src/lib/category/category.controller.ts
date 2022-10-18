import { CrudController } from 'api-core';
import {
  Category,
  CategoryCreateDTO,
  CategoryUpdateDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryService } from './category.service';

@ApiTags(CategoryController.name)
@Controller()
export class CategoryController extends CrudController<Category>({
  entity: Category,
  createDTO: CategoryCreateDTO,
  updateDTO: CategoryUpdateDTO,
  singularName: 'category',
  pluralName: 'categories',
}) {
  constructor(service: CategoryService) {
    super(service);
  }
}
