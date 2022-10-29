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
  CreateSprintDto,
  UpdateSprintDto,
} from '../dtos';
import { Sprint } from '../entities';
import { SprintService } from '../services/sprint.service';

@RestController({
  secure: true,
  resource: 'sprint',
})
export class SprintController {
  constructor(private readonly dataService: SprintService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateSprintDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Sprint>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateSprintDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Sprint>) {
    return this.dataService.delete(id, query);
  }
}
