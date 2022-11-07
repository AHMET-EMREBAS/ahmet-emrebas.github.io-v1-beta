import { Transaction, TransactionView } from 'models/inventory/transaction';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionPostController } from './transaction-post.controller';
import { TransactionQueryController } from './transaction-query.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, TransactionView])],
  controllers: [TransactionQueryController, TransactionPostController],
  providers: [TransactionService],
})
export class TransactionModule {}
