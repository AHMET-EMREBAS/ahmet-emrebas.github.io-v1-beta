import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Ad } from './ad.entity';

@EventSubscriber()
export class AdSubscriber implements EntitySubscriberInterface<Ad> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Ad events.
   */
  listenTo() {
    return Ad;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Ad>) {
    this.eventEmitter.emit('ad.entity.INSERT', event.entity);
  }
}
