import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Category } from './category.entity';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface<Category> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Category events.
   */
  listenTo() {
    return Category;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Category>) {
    this.eventEmitter.emit('category.entity.INSERT', event.entity);
  }
}
