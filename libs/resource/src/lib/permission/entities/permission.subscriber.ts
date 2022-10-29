import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Permission } from './permission.entity';

@EventSubscriber()
export class PermissionSubscriber implements EntitySubscriberInterface<Permission> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Permission events.
   */
  listenTo() {
    return Permission;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Permission>) {
    this.eventEmitter.emit('permission.entity.INSERT', event.entity);
  }
}
