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
  CreateProductDto,
  UpdateProductDto,
} from '../dtos';
import { Product } from '../entities';
import { ProductService } from '../services/product.service';

@RestController({
  secure: true,
  resource: 'product',
})
export class ProductController {
  constructor(private readonly dataService: ProductService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateProductDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Product>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateProductDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Product>) {
    return this.dataService.delete(id, query);
  }
}
