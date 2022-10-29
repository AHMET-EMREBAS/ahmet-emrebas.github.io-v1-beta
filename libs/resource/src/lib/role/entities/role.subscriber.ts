import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Role } from './role.entity';

@EventSubscriber()
export class RoleSubscriber implements EntitySubscriberInterface<Role> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Role events.
   */
  listenTo() {
    return Role;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Role>) {
    this.eventEmitter.emit('role.entity.INSERT', event.entity);
  }
}
