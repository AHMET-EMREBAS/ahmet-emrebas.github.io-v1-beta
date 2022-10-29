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
  CreatePriceDto,
  UpdatePriceDto,
} from '../dtos';
import { Price } from '../entities';
import { PriceService } from '../services/price.service';

@RestController({
  secure: true,
  resource: 'price',
})
export class PriceController {
  constructor(private readonly dataService: PriceService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreatePriceDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Price>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdatePriceDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Price>) {
    return this.dataService.delete(id, query);
  }
}
