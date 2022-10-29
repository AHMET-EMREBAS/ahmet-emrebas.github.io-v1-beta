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
  CreateVideoDto,
  UpdateVideoDto,
} from '../dtos';
import { Video } from '../entities';
import { VideoService } from '../services/video.service';

@RestController({
  secure: true,
  resource: 'video',
})
export class VideoController {
  constructor(private readonly dataService: VideoService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateVideoDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Video>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateVideoDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Video>) {
    return this.dataService.delete(id, query);
  }
}
