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
  CreateEmailDto,
  UpdateEmailDto,
} from '../dtos/';
import { Email } from '../entities';
import { EmailService } from '../services';

@RestController({
  secure: true,
  resource: 'ownemail',
})
export class EmailOwnController {
  constructor(private readonly dataService: EmailService) {}

  @PostOwnReq()
  createOwn(
    @ReqBody() createDTO: CreateEmailDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.createOwn(createDTO, user);
  }

  @GetOwnReq()
  findAllOwn(
    @ReqQuery() query: QueryDTO<Email>,
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
    @ReqBody() updateDTO: UpdateEmailDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.updateOwn(id, updateDTO, user);
  }

  @DeleteOwnReq()
  async softDeleteOwn(
    @IDParam() id: number,
    @Query() query: QueryDTO<Email>,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.deleteOwn(id, query, user);
  }
}
