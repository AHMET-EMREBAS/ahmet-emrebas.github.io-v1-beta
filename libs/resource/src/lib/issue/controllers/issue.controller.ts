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
  CreateIssueDto,
  UpdateIssueDto,
} from '../dtos';
import { Issue } from '../entities';
import { IssueService } from '../services/issue.service';

@RestController({
  secure: true,
  resource: 'issue',
})
export class IssueController {
  constructor(private readonly dataService: IssueService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateIssueDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Issue>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateIssueDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Issue>) {
    return this.dataService.delete(id, query);
  }
}
