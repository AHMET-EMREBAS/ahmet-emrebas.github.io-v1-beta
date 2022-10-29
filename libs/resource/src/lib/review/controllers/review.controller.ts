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
  CreateReviewDto,
  UpdateReviewDto,
} from '../dtos';
import { Review } from '../entities';
import { ReviewService } from '../services/review.service';

@RestController({
  secure: true,
  resource: 'review',
})
export class ReviewController {
  constructor(private readonly dataService: ReviewService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateReviewDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Review>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateReviewDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Review>) {
    return this.dataService.delete(id, query);
  }
}
