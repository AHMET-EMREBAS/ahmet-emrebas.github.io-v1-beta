import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Notification } from './notification.entity';

@EventSubscriber()
export class NotificationSubscriber implements EntitySubscriberInterface<Notification> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Notification events.
   */
  listenTo() {
    return Notification;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Notification>) {
    this.eventEmitter.emit('notification.entity.INSERT', event.entity);
  }
}
