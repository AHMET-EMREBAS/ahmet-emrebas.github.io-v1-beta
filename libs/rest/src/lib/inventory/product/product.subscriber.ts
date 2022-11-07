import { ClassConstructor } from 'core';
import { Product } from 'models/inventory/product';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
  logger = new Logger(ProductSubscriber.name);

  listenTo(): ClassConstructor<Product> {
    return Product;
  }

  beforeInsert(event: InsertEvent<Product>): void | Promise<any> {
    this.logger.log('[Product] Inserted product', event.entity);
  }

  beforeRemove(event: RemoveEvent<Product>): void | Promise<any> {
    this.logger.log('[Product] Removed product', event.entity);
  }
}
