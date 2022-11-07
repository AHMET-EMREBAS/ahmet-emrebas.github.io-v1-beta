import { Transaction, TransactionView } from 'models/inventory/transaction';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionPostController } from './transaction-post.controller';
import { TransactionQueryController } from './transaction-query.controller';
import { TransactionService } from './transaction.service';
import { TransactionSubscriber } from './transaction.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, TransactionView])],
  controllers: [TransactionQueryController, TransactionPostController],
  providers: [TransactionService, TransactionSubscriber],
  exports: [TransactionService],
})
export class TransactionModule {}
