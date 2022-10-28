import { IUserEntity } from 'common';
import {
  DeleteOwnReq,
  GetOwnReq,
  GetOwnReqById,
  IDParam,
  PostOwnReq,
  QueryDTO,
  ReqBody,
  ReqQuery,
  ReqUser,
  RestController,
  UpdateOwnReq,
} from 'core';

import { Query } from '@nestjs/common';

import {
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../dtos/';
import { Category } from '../entities';
import { CategoryService } from '../services';

@RestController({
  secure: true,
  resource: 'own-category',
})
export class CategoryOwnController {
  constructor(private readonly dataService: CategoryService) {}

  @PostOwnReq()
  createOwn(
    @ReqBody() createDTO: CreateCategoryDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.createOwn(createDTO, user);
  }

  @GetOwnReq()
  findAllOwn(
    @ReqQuery() query: QueryDTO<Category>,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.viewAllOwn(query, user);
  }

  @GetOwnReqById()
  async findOneOwn(@IDParam() id: number, @ReqUser() user: IUserEntity) {
    return this.dataService.viewOneOwn(id, user);
  }

  @UpdateOwnReq()
  updateOwn(
    @IDParam() id: number,
    @ReqBody() updateDTO: UpdateCategoryDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.updateOwn(id, updateDTO, user);
  }

  @DeleteOwnReq()
  async softDeleteOwn(
    @IDParam() id: number,
    @Query() query: QueryDTO<Category>,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.deleteOwn(id, query, user);
  }
}
