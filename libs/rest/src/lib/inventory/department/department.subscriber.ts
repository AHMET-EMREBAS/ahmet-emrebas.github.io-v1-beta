import { ClassConstructor } from 'core';
import { Department } from 'models/inventory/department';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class DepartmentSubscriber
  implements EntitySubscriberInterface<Department>
{
  logger = new Logger(DepartmentSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Department> {
    return Department;
  }

  beforeInsert(event: InsertEvent<Department>): void | Promise<any> {
    this.logger.log('[Department] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Department>): void | Promise<any> {
    this.logger.log('[Department] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
