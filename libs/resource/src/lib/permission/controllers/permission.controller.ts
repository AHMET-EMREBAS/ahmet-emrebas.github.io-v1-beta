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
  CreatePermissionDto,
  UpdatePermissionDto,
} from '../dtos';
import { Permission } from '../entities';
import { PermissionService } from '../services/permission.service';

@RestController({
  secure: true,
  resource: 'permission',
})
export class PermissionController {
  constructor(private readonly dataService: PermissionService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreatePermissionDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Permission>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdatePermissionDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Permission>) {
    return this.dataService.delete(id, query);
  }
}
