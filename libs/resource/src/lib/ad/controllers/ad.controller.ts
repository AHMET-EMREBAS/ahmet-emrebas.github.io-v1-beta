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
  CreateAdDto,
  UpdateAdDto,
} from '../dtos';
import { Ad } from '../entities';
import { AdService } from '../services/ad.service';

@RestController({
  secure: true,
  resource: 'ad',
})
export class AdController {
  constructor(private readonly dataService: AdService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateAdDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Ad>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateAdDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Ad>) {
    return this.dataService.delete(id, query);
  }
}
