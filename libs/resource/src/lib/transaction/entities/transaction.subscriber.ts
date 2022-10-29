import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Transaction } from './transaction.entity';

@EventSubscriber()
export class TransactionSubscriber implements EntitySubscriberInterface<Transaction> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Transaction events.
   */
  listenTo() {
    return Transaction;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Transaction>) {
    this.eventEmitter.emit('transaction.entity.INSERT', event.entity);
  }
}
