import {
  GetPostController,
  ManagePermission,
} from 'core';
import {
  CreateCategoryDto,
  UpdateCategoryDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryNames } from './category.names';
import { CategoryService } from './category.service';

@ApiTags('[ Post / Update ] Category')
@ManagePermission(CategoryNames.SINGULAR_NAME)
@Controller(CategoryNames.SINGULAR_NAME)
export class CategoryPostController extends GetPostController(
  CategoryNames.SINGULAR_NAME,
  CreateCategoryDto,
  UpdateCategoryDTO
) {
  constructor(private readonly service: CategoryService) {
    super(service);
  }

  // @WritePermission(CategoryNames.SINGULAR_NAME)
  // @SaveOne()
  // save(@ReqBody() body: CreateCategoryDto) {
  //   return this.service.save(body);
  // }

  // @WritePermission(CategoryNames.SINGULAR_NAME)
  // @UpdateOneById()
  // update(@IdParam() id: number, @ReqBody() updated: UpdateCategoryDTO) {
  //   return this.service.update(id, updated);
  // }
}
