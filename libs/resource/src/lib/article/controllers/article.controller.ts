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
  CreateArticleDto,
  UpdateArticleDto,
} from '../dtos';
import { Article } from '../entities';
import { ArticleService } from '../services/article.service';

@RestController({
  secure: true,
  resource: 'article',
})
export class ArticleController {
  constructor(private readonly dataService: ArticleService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateArticleDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Article>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateArticleDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Article>) {
    return this.dataService.delete(id, query);
  }
}
