import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Blog } from './blog.entity';

@EventSubscriber()
export class BlogSubscriber implements EntitySubscriberInterface<Blog> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Blog events.
   */
  listenTo() {
    return Blog;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Blog>) {
    this.eventEmitter.emit('blog.entity.INSERT', event.entity);
  }
}
