import { ClassConstructor } from 'core';
import { Quantity } from 'models/inventory/quantity';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class QuantitySubscriber implements EntitySubscriberInterface<Quantity> {
  logger = new Logger(QuantitySubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Quantity> {
    return Quantity;
  }

  beforeInsert(event: InsertEvent<Quantity>): void | Promise<any> {
    this.logger.log('[Quantity] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Quantity>): void | Promise<any> {
    this.logger.log('[Quantity] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
