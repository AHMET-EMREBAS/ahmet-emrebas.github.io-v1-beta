import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Quantity } from './quantity.entity';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface<Quantity> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Quantity events.
   */
  listenTo() {
    return Quantity;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Quantity>) {
    this.eventEmitter.emit('quantity.entity.INSERT', event.entity);
  }
}
