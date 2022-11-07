import { ClassConstructor } from 'core';
import { Order } from 'models/inventory/order';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Order> {
  logger = new Logger(OrderSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Order> {
    return Order;
  }

  beforeInsert(event: InsertEvent<Order>): void | Promise<any> {
    this.logger.log('[Order] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Order>): void | Promise<any> {
    this.logger.log('[Order] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
