import { GetQueryController, ManagePermission } from 'core';
import { Transaction, TransactionView } from 'models/inventory/transaction';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TransactionNames } from './transaction.names';
import { TransactionService } from './transaction.service';

@ApiTags('[ Query / Relation ] Transaction')
@ManagePermission(TransactionNames.SINGULAR_NAME)
@Controller(TransactionNames.SINGULAR_NAME)
export class TransactionQueryController extends GetQueryController<
  Transaction,
  TransactionView
>(TransactionNames.SINGULAR_NAME) {
  constructor(service: TransactionService) {
    super(service);
  }
}
