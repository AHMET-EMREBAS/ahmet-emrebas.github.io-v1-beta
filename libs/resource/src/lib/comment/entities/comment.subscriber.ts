import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Comment } from './comment.entity';

@EventSubscriber()
export class CommentSubscriber implements EntitySubscriberInterface<Comment> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Comment events.
   */
  listenTo() {
    return Comment;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Comment>) {
    this.eventEmitter.emit('comment.entity.INSERT', event.entity);
  }
}
