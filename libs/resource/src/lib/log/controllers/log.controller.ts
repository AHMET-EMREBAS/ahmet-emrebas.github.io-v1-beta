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
  CreateLogDto,
  UpdateLogDto,
} from '../dtos';
import { Log } from '../entities';
import { LogService } from '../services/log.service';

@RestController({
  secure: true,
  resource: 'log',
})
export class LogController {
  constructor(private readonly dataService: LogService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateLogDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Log>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateLogDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Log>) {
    return this.dataService.delete(id, query);
  }
}
