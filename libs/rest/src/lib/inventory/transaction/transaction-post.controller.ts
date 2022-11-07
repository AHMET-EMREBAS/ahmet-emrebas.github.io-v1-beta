import { GetPostController, ManagePermission } from 'core';
import {
  CreateTransactionDto,
  UpdateTransactionDTO,
} from 'models/inventory/transaction';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TransactionNames } from './transaction.names';
import { TransactionService } from './transaction.service';

@ApiTags('[ Post / Update ] Transaction')
@ManagePermission(TransactionNames.SINGULAR_NAME)
@Controller(TransactionNames.SINGULAR_NAME)
export class TransactionPostController extends GetPostController(
  TransactionNames.SINGULAR_NAME,
  CreateTransactionDto,
  UpdateTransactionDTO
) {
  constructor(private readonly service: TransactionService) {
    super(service);
  }
}
