import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Product } from './product.entity';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Product events.
   */
  listenTo() {
    return Product;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Product>) {
    this.eventEmitter.emit('product.entity.INSERT', event.entity);
  }
}
