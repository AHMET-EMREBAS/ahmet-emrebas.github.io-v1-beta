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
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../dtos';
import { Category } from '../entities';
import { CategoryService } from '../services/category.service';

@RestController({
  secure: true,
  resource: 'category',
})
export class CategoryController {
  constructor(private readonly dataService: CategoryService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateCategoryDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Category>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateCategoryDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Category>) {
    return this.dataService.delete(id, query);
  }
}
