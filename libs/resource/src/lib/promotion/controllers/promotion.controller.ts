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
  CreatePromotionDto,
  UpdatePromotionDto,
} from '../dtos';
import { Promotion } from '../entities';
import { PromotionService } from '../services/promotion.service';

@RestController({
  secure: true,
  resource: 'promotion',
})
export class PromotionController {
  constructor(private readonly dataService: PromotionService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreatePromotionDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Promotion>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdatePromotionDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Promotion>) {
    return this.dataService.delete(id, query);
  }
}
