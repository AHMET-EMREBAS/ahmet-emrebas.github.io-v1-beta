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
  CreateStoreDto,
  UpdateStoreDto,
} from '../dtos';
import { Store } from '../entities';
import { StoreService } from '../services/store.service';

@RestController({
  secure: true,
  resource: 'store',
})
export class StoreController {
  constructor(private readonly dataService: StoreService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateStoreDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Store>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateStoreDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Store>) {
    return this.dataService.delete(id, query);
  }
}
