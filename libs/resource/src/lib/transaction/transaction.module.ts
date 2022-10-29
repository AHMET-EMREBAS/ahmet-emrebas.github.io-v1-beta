import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  TransactionController,
  TransactionOwnController,
} from './controllers';
import {
  Transaction,
  TransactionSubscriber,
  TransactionView,
} from './entities';
import { TransactionService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, TransactionView])],
  controllers: [TransactionController, TransactionOwnController],
  providers: [TransactionService, TransactionSubscriber],
  exports: [TransactionService],
})
export class TransactionModule {}
