import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Message } from './message.entity';

@EventSubscriber()
export class MessageSubscriber implements EntitySubscriberInterface<Message> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Message events.
   */
  listenTo() {
    return Message;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Message>) {
    this.eventEmitter.emit('message.entity.INSERT', event.entity);
  }
}
