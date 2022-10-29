import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Department } from './department.entity';

@EventSubscriber()
export class DepartmentSubscriber implements EntitySubscriberInterface<Department> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Department events.
   */
  listenTo() {
    return Department;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Department>) {
    this.eventEmitter.emit('department.entity.INSERT', event.entity);
  }
}
