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
  CreateImgDto,
  UpdateImgDto,
} from '../dtos';
import { Img } from '../entities';
import { ImgService } from '../services/img.service';

@RestController({
  secure: true,
  resource: 'img',
})
export class ImgController {
  constructor(private readonly dataService: ImgService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateImgDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Img>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateImgDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Img>) {
    return this.dataService.delete(id, query);
  }
}
