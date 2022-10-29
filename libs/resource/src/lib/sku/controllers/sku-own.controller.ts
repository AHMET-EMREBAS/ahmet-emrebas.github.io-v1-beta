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
  CreateSkuDto,
  UpdateSkuDto,
} from '../dtos/';
import { Sku } from '../entities';
import { SkuService } from '../services';

@RestController({
  secure: true,
  resource: 'ownsku',
})
export class SkuOwnController {
  constructor(private readonly dataService: SkuService) {}

  @PostOwnReq()
  createOwn(
    @ReqBody() createDTO: CreateSkuDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.createOwn(createDTO, user);
  }

  @GetOwnReq()
  findAllOwn(
    @ReqQuery() query: QueryDTO<Sku>,
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
    @ReqBody() updateDTO: UpdateSkuDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.updateOwn(id, updateDTO, user);
  }

  @DeleteOwnReq()
  async softDeleteOwn(
    @IDParam() id: number,
    @Query() query: QueryDTO<Sku>,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.deleteOwn(id, query, user);
  }
}
