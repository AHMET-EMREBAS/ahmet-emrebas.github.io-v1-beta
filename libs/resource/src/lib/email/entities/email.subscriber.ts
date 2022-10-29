import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Email } from './email.entity';

@EventSubscriber()
export class EmailSubscriber implements EntitySubscriberInterface<Email> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Email events.
   */
  listenTo() {
    return Email;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Email>) {
    this.eventEmitter.emit('email.entity.INSERT', event.entity);
  }
}
