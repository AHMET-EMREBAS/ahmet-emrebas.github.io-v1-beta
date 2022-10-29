import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Order } from './order.entity';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Order> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Order events.
   */
  listenTo() {
    return Order;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Order>) {
    this.eventEmitter.emit('order.entity.INSERT', event.entity);
  }
}
