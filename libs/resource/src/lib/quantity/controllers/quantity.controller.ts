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
  CreateQuantityDto,
  UpdateQuantityDto,
} from '../dtos';
import { Quantity } from '../entities';
import { QuantityService } from '../services/quantity.service';

@RestController({
  secure: true,
  resource: 'quantity',
})
export class QuantityController {
  constructor(private readonly dataService: QuantityService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateQuantityDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Quantity>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateQuantityDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Quantity>) {
    return this.dataService.delete(id, query);
  }
}
