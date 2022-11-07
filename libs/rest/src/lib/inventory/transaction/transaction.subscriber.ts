import { ClassConstructor } from 'core';
import { Transaction } from 'models/inventory/transaction';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class TransactionSubscriber
  implements EntitySubscriberInterface<Transaction>
{
  logger = new Logger(TransactionSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Transaction> {
    return Transaction;
  }

  beforeInsert(event: InsertEvent<Transaction>): void | Promise<any> {
    this.logger.log('[Transaction] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Transaction>): void | Promise<any> {
    this.logger.log('[Transaction] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
