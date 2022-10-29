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
  CreateRoleDto,
  UpdateRoleDto,
} from '../dtos';
import { Role } from '../entities';
import { RoleService } from '../services/role.service';

@RestController({
  secure: true,
  resource: 'role',
})
export class RoleController {
  constructor(private readonly dataService: RoleService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateRoleDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Role>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateRoleDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Role>) {
    return this.dataService.delete(id, query);
  }
}
