import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Review } from './review.entity';

@EventSubscriber()
export class ReviewSubscriber implements EntitySubscriberInterface<Review> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Review events.
   */
  listenTo() {
    return Review;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Review>) {
    this.eventEmitter.emit('review.entity.INSERT', event.entity);
  }
}
