import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Employee } from './employee.entity';

@EventSubscriber()
export class EmployeeSubscriber implements EntitySubscriberInterface<Employee> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Employee events.
   */
  listenTo() {
    return Employee;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Employee>) {
    this.eventEmitter.emit('employee.entity.INSERT', event.entity);
  }
}
