import { ClassConstructor } from 'core';
import { Variant } from 'models/inventory/variant';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class VariantSubscriber implements EntitySubscriberInterface<Variant> {
  logger = new Logger(VariantSubscriber.name);

  listenTo(): ClassConstructor<Variant> {
    return Variant;
  }

  beforeInsert(event: InsertEvent<Variant>): void | Promise<any> {
    this.logger.log('[Variant] Inserted variant', event.entity);
  }

  beforeRemove(event: RemoveEvent<Variant>): void | Promise<any> {
    this.logger.log('[Variant] Removed variant', event.entity);
  }
}
