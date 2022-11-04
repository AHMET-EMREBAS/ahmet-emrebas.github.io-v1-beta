import { ClassConstructor } from 'core';
import { Product } from 'models/inventory/product';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  logger = new Logger(ProductSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Product> {
    return Product;
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    this.logger.log('[Product] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Product>): void | Promise<any> {
    this.logger.log('[Product] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
