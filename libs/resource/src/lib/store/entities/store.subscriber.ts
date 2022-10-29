import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Store } from './store.entity';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface<Store> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Store events.
   */
  listenTo() {
    return Store;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Store>) {
    this.eventEmitter.emit('store.entity.INSERT', event.entity);
  }
}
