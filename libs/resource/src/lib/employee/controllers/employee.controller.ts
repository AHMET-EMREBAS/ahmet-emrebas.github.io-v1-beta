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
  CreateEmployeeDto,
  UpdateEmployeeDto,
} from '../dtos';
import { Employee } from '../entities';
import { EmployeeService } from '../services/employee.service';

@RestController({
  secure: true,
  resource: 'employee',
})
export class EmployeeController {
  constructor(private readonly dataService: EmployeeService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateEmployeeDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Employee>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateEmployeeDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Employee>) {
    return this.dataService.delete(id, query);
  }
}
