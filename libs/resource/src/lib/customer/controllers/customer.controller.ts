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
  CreateCustomerDto,
  UpdateCustomerDto,
} from '../dtos';
import { Customer } from '../entities';
import { CustomerService } from '../services/customer.service';

@RestController({
  secure: true,
  resource: 'customer',
})
export class CustomerController {
  constructor(private readonly dataService: CustomerService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateCustomerDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Customer>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateCustomerDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Customer>) {
    return this.dataService.delete(id, query);
  }
}
