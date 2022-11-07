import { ClassConstructor } from 'core';
import { Order } from 'models/inventory/order';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class OrderSubscriber implements EntitySubscriberInterface<Order> {
  logger = new Logger(OrderSubscriber.name);

  listenTo(): ClassConstructor<Order> {
    return Order;
  }

  beforeInsert(event: InsertEvent<Order>): void | Promise<any> {
    this.logger.log('[Order] Inserted order', event.entity);
  }

  beforeRemove(event: RemoveEvent<Order>): void | Promise<any> {
    this.logger.log('[Order] Removed order', event.entity);
  }
}
