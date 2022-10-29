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
  CreateSampleDto,
  UpdateSampleDto,
} from '../dtos';
import { Sample } from '../entities';
import { SampleService } from '../services/sample.service';

@RestController({
  secure: true,
  resource: 'sample',
})
export class SampleController {
  constructor(private readonly dataService: SampleService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateSampleDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Sample>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateSampleDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Sample>) {
    return this.dataService.delete(id, query);
  }
}
