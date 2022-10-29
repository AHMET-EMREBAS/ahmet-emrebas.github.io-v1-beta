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
  CreateCommentDto,
  UpdateCommentDto,
} from '../dtos';
import { Comment } from '../entities';
import { CommentService } from '../services/comment.service';

@RestController({
  secure: true,
  resource: 'comment',
})
export class CommentController {
  constructor(private readonly dataService: CommentService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateCommentDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Comment>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateCommentDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Comment>) {
    return this.dataService.delete(id, query);
  }
}
