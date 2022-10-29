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
  CreatePricelevelDto,
  UpdatePricelevelDto,
} from '../dtos';
import { Pricelevel } from '../entities';
import { PricelevelService } from '../services/pricelevel.service';

@RestController({
  secure: true,
  resource: 'pricelevel',
})
export class PricelevelController {
  constructor(private readonly dataService: PricelevelService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreatePricelevelDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Pricelevel>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdatePricelevelDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Pricelevel>) {
    return this.dataService.delete(id, query);
  }
}
