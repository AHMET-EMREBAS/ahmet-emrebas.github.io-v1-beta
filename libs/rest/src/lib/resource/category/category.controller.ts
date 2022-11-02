import {
  DeleteById,
  FindAll,
  FindOneById,
  HardDelete,
  IdParam,
  PaginatorQueryDto,
  ReqBody,
  ReqQuery,
  SaveOne,
  UpdateOneById,
  WhereQueryDto,
  WithDeletedDto,
} from 'core';
import {
  CreateCategoryDto,
  UpdateCategoryDTO,
} from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CategoryService } from './category.service';

@ApiTags('Category Resource')
@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @FindAll()
  findAll(
    @ReqQuery() paginatorDto: PaginatorQueryDto,
    @ReqQuery() withDeleteDto: WithDeletedDto,
    @ReqQuery() whereQueryDto: WhereQueryDto
  ) {
    console.table({
      ...paginatorDto,
      ...withDeleteDto,
      ...whereQueryDto,
    });
    return this.service.find({
      ...paginatorDto,
      ...withDeleteDto,
      ...whereQueryDto,
    });
  }

  @FindOneById()
  findOneById(@IdParam() id: number) {
    return this.service.findOneBy({ id });
  }

  @SaveOne()
  save(@ReqBody() body: CreateCategoryDto) {
    return this.service.save(body);
  }

  @UpdateOneById()
  update(@IdParam() id: number, @ReqBody() updated: UpdateCategoryDTO) {
    return this.service.update(id, updated);
  }

  @DeleteById()
  delete(@IdParam() id: number, @ReqQuery() hardDelete: HardDelete) {
    if (hardDelete.hard) {
      return this.service.delete(id);
    } else {
      return this.service.softDelete(id);
    }
  }
}
