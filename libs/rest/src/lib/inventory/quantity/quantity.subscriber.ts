import { ClassConstructor } from 'core';
import { Quantity } from 'models/inventory/quantity';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface<Quantity> {
  logger = new Logger(QuantitySubscriber.name);

  listenTo(): ClassConstructor<Quantity> {
    return Quantity;
  }

  beforeInsert(event: InsertEvent<Quantity>): void | Promise<any> {
    this.logger.log('[Quantity] Inserted quantity', event.entity);
  }

  beforeRemove(event: RemoveEvent<Quantity>): void | Promise<any> {
    this.logger.log('[Quantity] Removed quantity', event.entity);
  }
}
