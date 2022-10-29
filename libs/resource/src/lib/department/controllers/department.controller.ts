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
  CreateDepartmentDto,
  UpdateDepartmentDto,
} from '../dtos';
import { Department } from '../entities';
import { DepartmentService } from '../services/department.service';

@RestController({
  secure: true,
  resource: 'department',
})
export class DepartmentController {
  constructor(private readonly dataService: DepartmentService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateDepartmentDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Department>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateDepartmentDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Department>) {
    return this.dataService.delete(id, query);
  }
}
