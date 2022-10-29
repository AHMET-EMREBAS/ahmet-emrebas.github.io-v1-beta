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
  CreateBlogDto,
  UpdateBlogDto,
} from '../dtos';
import { Blog } from '../entities';
import { BlogService } from '../services/blog.service';

@RestController({
  secure: true,
  resource: 'blog',
})
export class BlogController {
  constructor(private readonly dataService: BlogService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateBlogDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Blog>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateBlogDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Blog>) {
    return this.dataService.delete(id, query);
  }
}
