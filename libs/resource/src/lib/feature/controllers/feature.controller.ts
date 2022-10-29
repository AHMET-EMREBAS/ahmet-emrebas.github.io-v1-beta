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
  CreateFeatureDto,
  UpdateFeatureDto,
} from '../dtos';
import { Feature } from '../entities';
import { FeatureService } from '../services/feature.service';

@RestController({
  secure: true,
  resource: 'feature',
})
export class FeatureController {
  constructor(private readonly dataService: FeatureService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateFeatureDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Feature>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateFeatureDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Feature>) {
    return this.dataService.delete(id, query);
  }
}
