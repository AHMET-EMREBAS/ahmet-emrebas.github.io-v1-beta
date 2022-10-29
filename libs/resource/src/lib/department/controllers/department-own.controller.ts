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
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from '../dtos/';
import { Department } from '../entities';
import { DepartmentService } from '../services';

@RestController({
  secure: true,
  resource: 'owndepartment',
})
export class DepartmentOwnController {
  constructor(private readonly dataService: DepartmentService) {}

  @PostOwnReq()
  createOwn(
    @ReqBody() createDTO: CreateDepartmentDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.createOwn(createDTO, user);
  }

  @GetOwnReq()
  findAllOwn(
    @ReqQuery() query: QueryDTO<Department>,
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
    @ReqBody() updateDTO: UpdateDepartmentDto,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.updateOwn(id, updateDTO, user);
  }

  @DeleteOwnReq()
  async softDeleteOwn(
    @IDParam() id: number,
    @Query() query: QueryDTO<Department>,
    @ReqUser() user: IUserEntity
  ) {
    return this.dataService.deleteOwn(id, query, user);
  }
}
