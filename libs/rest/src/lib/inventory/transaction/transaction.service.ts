import { CrudService } from 'core';
import { Transaction, TransactionView } from 'models/inventory/transaction';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TransactionService extends CrudService<
  Transaction,
  TransactionView
> {
  constructor(
    @InjectRepository(Transaction) mainRepo: Repository<Transaction>,
    @InjectRepository(TransactionView) viewRepo: Repository<TransactionView>
  ) {
    super(mainRepo, viewRepo);
  }
}
