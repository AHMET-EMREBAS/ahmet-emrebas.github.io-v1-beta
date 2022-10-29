import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Sku } from './sku.entity';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Sku events.
   */
  listenTo() {
    return Sku;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Sku>) {
    this.eventEmitter.emit('sku.entity.INSERT', event.entity);
  }
}
