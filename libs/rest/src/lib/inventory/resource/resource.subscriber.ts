import { ClassConstructor } from 'core';
import { Resource } from 'models/inventory/resource';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class ResourceSubscriber implements EntitySubscriberInterface<Resource> {
  logger = new Logger(ResourceSubscriber.name);

  listenTo(): ClassConstructor<Resource> {
    return Resource;
  }

  beforeInsert(event: InsertEvent<Resource>): void | Promise<any> {
    this.logger.log('[Resource] Inserted resource', event.entity);
  }

  beforeRemove(event: RemoveEvent<Resource>): void | Promise<any> {
    this.logger.log('[Resource] Removed resource', event.entity);
  }
}
