import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Transaction,
  TransactionView,
} from '../entities';

@Injectable()
export class TransactionService extends ResourceService<Transaction, TransactionView> {
  constructor(
    @InjectRepository(Transaction) repo: Repository<Transaction>,
    @InjectRepository(TransactionView) viewRepo: Repository<TransactionView>
  ) {
    super(repo, viewRepo);
  }
}
