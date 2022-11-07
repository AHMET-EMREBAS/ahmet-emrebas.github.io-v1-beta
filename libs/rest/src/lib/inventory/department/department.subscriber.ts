import { ClassConstructor } from 'core';
import { Department } from 'models/inventory/department';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class DepartmentSubscriber
  implements EntitySubscriberInterface<Department>
{
  logger = new Logger(DepartmentSubscriber.name);

  listenTo(): ClassConstructor<Department> {
    return Department;
  }

  beforeInsert(event: InsertEvent<Department>): void | Promise<any> {
    this.logger.log('[Department] Inserted department', event.entity);
  }

  beforeRemove(event: RemoveEvent<Department>): void | Promise<any> {
    this.logger.log('[Department] Removed department', event.entity);
  }
}
