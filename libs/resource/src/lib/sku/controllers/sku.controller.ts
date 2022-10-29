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
  CreateSkuDto,
  UpdateSkuDto,
} from '../dtos';
import { Sku } from '../entities';
import { SkuService } from '../services/sku.service';

@RestController({
  secure: true,
  resource: 'sku',
})
export class SkuController {
  constructor(private readonly dataService: SkuService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateSkuDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Sku>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateSkuDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Sku>) {
    return this.dataService.delete(id, query);
  }
}
