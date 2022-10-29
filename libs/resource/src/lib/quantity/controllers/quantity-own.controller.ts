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
  CreateQuantityDto,
  UpdateQuantityDto,
} from '../dtos/';
import { Quantity } from '../entities';
import { QuantityService } from '../services';

@RestController({
  secure: true,
  resource: 'ownquantity',
})
export class QuantityOwnController {
  constructor(private readonly dataService: QuantityService) {}

  @PostOwnReq()
  createOwn(
    @ReqBody() createDTO: CreateQuantityDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.createOwn(createDTO, user);
  }

  @GetOwnReq()
  findAllOwn(
    @ReqQuery() query: QueryDTO<Quantity>,
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
    @ReqBody() updateDTO: UpdateQuantityDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.updateOwn(id, updateDTO, user);
  }

  @DeleteOwnReq()
  async softDeleteOwn(
    @IDParam() id: number,
    @Query() query: QueryDTO<Quantity>,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.deleteOwn(id, query, user);
  }
}
