import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Tag } from './tag.entity';

@EventSubscriber()
export class TagSubscriber implements EntitySubscriberInterface<Tag> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Tag events.
   */
  listenTo() {
    return Tag;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Tag>) {
    this.eventEmitter.emit('tag.entity.INSERT', event.entity);
  }
}
