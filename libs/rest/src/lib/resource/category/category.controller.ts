import {
  AddRelationPath,
  DeleteById,
  FindAll,
  FindOneById,
  HardDelete,
  IdParam,
  PaginatorQueryDto,
  RelationIdParam,
  RelationNameParam,
  RemoveRelationPath,
  ReqBody,
  ReqQuery,
  SaveOne,
  SetRelationPath,
  UnSetRelationPath,
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

  @AddRelationPath()
  add(
    @IdParam() id: number,
    @RelationIdParam() relationId: number,
    @RelationNameParam() relationName: string
  ) {
    return this.service.add(id, relationId, relationName);
  }

  @SetRelationPath()
  set(
    @IdParam() id: number,
    @RelationIdParam() relationId: number,
    @RelationNameParam() relationName: string
  ) {
    return this.service.set(id, relationId, relationName);
  }

  @UnSetRelationPath()
  unset(@IdParam() id: number, @RelationNameParam() relationName: string) {
    return this.service.unset(id, relationName);
  }

  @RemoveRelationPath()
  remove(
    @IdParam() id: number,
    @RelationIdParam() relationId: number,
    @RelationNameParam() relationName: string
  ) {
    return this.service.remove(id, relationId, relationName);
  }
}
