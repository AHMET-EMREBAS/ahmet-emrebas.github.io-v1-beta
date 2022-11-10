import { ClassConstructor } from 'core';
import { Permission } from 'models/inventory/permission';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class PermissionSubscriber
  implements EntitySubscriberInterface<Permission>
{
  logger = new Logger(PermissionSubscriber.name);

  listenTo(): ClassConstructor<Permission> {
    return Permission;
  }

  beforeInsert(event: InsertEvent<Permission>): void | Promise<any> {
    this.logger.log('[Permission] Inserted permission', event.entity);
  }

  beforeRemove(event: RemoveEvent<Permission>): void | Promise<any> {
    this.logger.log('[Permission] Removed permission', event.entity);
  }
}
