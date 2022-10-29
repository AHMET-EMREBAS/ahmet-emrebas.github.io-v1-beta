import {
  DeleteReq,
  GetReq,
  GetReqById,
  IDParam,
  PostReq,
  QueryDTO,
  ReqBody,
  ReqQuery,
  RestController,
  UpdateReq,
} from 'core';

import { Query } from '@nestjs/common';

import {
  CreateUserDto,
  UpdateUserDto,
} from '../dtos';
import { User } from '../entities';
import { UserService } from '../services/user.service';

@RestController({
  secure: true,
  resource: 'user',
})
export class UserController {
  constructor(private readonly dataService: UserService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateUserDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<User>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateUserDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<User>) {
    return this.dataService.delete(id, query);
  }
}
