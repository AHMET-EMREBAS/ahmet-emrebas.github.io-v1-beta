import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Promotion } from './promotion.entity';

@EventSubscriber()
export class PromotionSubscriber implements EntitySubscriberInterface<Promotion> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Promotion events.
   */
  listenTo() {
    return Promotion;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Promotion>) {
    this.eventEmitter.emit('promotion.entity.INSERT', event.entity);
  }
}
