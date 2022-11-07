import { Transaction, TransactionView } from 'models/inventory/transaction';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TransactionPostController } from './transaction-post.controller';
import { TransactionQueryController } from './transaction-query.controller';
import { TransactionService } from './transaction.service';
import { TransactionSubscriber } from './transaction.subscriber';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([Transaction, TransactionView]),
    EventEmitterModule,
  ],
  controllers: [TransactionQueryController, TransactionPostController],
  providers: [TransactionService, TransactionSubscriber],
  exports: [TransactionService],
})
export class TransactionModule {}
