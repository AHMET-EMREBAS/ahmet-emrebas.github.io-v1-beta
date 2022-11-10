import { ClassConstructor } from 'core';
import { Sku } from 'models/inventory/sku';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class SkuSubscriber implements EntitySubscriberInterface<Sku> {
  logger = new Logger(SkuSubscriber.name);

  listenTo(): ClassConstructor<Sku> {
    return Sku;
  }

  beforeInsert(event: InsertEvent<Sku>): void | Promise<any> {
    this.logger.log('[Sku] Inserted sku', event.entity);
  }

  beforeRemove(event: RemoveEvent<Sku>): void | Promise<any> {
    this.logger.log('[Sku] Removed sku', event.entity);
  }
}
