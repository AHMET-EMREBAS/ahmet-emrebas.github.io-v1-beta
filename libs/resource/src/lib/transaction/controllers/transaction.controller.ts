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
  CreateTransactionDto,
  UpdateTransactionDto,
} from '../dtos';
import { Transaction } from '../entities';
import { TransactionService } from '../services/transaction.service';

@RestController({
  secure: true,
  resource: 'transaction',
})
export class TransactionController {
  constructor(private readonly dataService: TransactionService) {}

  @PostReq()
  create(@ReqBody() createDTO: CreateTransactionDto) {
    return this.dataService.create(createDTO);
  }

  @GetReq()
  findAll(@ReqQuery() query: QueryDTO<Transaction>) {
    return this.dataService.viewAll(query);
  }

  @GetReqById()
  async findOne(@IDParam() id: number) {
    return this.dataService.viewOne(id);
  }

  @UpdateReq()
  update(@IDParam() id: number, @ReqBody() updateDTO: UpdateTransactionDto) {
    return this.dataService.update(id, updateDTO);
  }

  @DeleteReq()
  async softDelete(@IDParam() id: number, @Query() query: QueryDTO<Transaction>) {
    return this.dataService.delete(id, query);
  }
}
