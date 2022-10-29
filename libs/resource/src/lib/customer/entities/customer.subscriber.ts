import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Customer } from './customer.entity';

@EventSubscriber()
export class CustomerSubscriber implements EntitySubscriberInterface<Customer> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Customer events.
   */
  listenTo() {
    return Customer;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Customer>) {
    this.eventEmitter.emit('customer.entity.INSERT', event.entity);
  }
}
