import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Price } from './price.entity';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface<Price> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Price events.
   */
  listenTo() {
    return Price;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Price>) {
    this.eventEmitter.emit('price.entity.INSERT', event.entity);
  }
}
