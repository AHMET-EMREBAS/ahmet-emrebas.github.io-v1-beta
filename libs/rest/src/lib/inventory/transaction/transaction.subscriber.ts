import { ClassConstructor } from 'core';
import { Transaction } from 'models/inventory/transaction';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class TransactionSubscriber
  implements EntitySubscriberInterface<Transaction>
{
  logger = new Logger(TransactionSubscriber.name);

  listenTo(): ClassConstructor<Transaction> {
    return Transaction;
  }

  beforeInsert(event: InsertEvent<Transaction>): void | Promise<any> {
    this.logger.log('[Transaction] Inserted transaction', event.entity);
  }

  beforeRemove(event: RemoveEvent<Transaction>): void | Promise<any> {
    this.logger.log('[Transaction] Removed transaction', event.entity);
  }
}
