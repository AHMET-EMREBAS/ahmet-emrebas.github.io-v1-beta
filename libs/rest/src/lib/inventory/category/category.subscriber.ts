import { ClassConstructor } from 'core';
import { Category } from 'models/inventory/category';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface<Category> {
  logger = new Logger(CategorySubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Category> {
    return Category;
  }

  beforeInsert(event: InsertEvent<Category>): void | Promise<any> {
    this.logger.log('[Category] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Category>): void | Promise<any> {
    this.logger.log('[Category] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
