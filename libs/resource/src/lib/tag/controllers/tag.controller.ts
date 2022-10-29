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
  CreateTagDto,
  UpdateTagDto,
} from '../dtos';
import { Tag } from '../entities';
import { TagService } from '../services/tag.service';

@RestController({
  secure: true,
  resource: 'tag',
})
export class TagController {
  constructor(private readonly dataService: TagService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateTagDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Tag>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateTagDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Tag>) {
    return this.dataService.delete(id, query);
  }
}
