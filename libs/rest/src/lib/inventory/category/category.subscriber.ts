import { ClassConstructor } from 'core';
import { Category } from 'models/inventory/category';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface<Category> {
  logger = new Logger(CategorySubscriber.name);

  listenTo(): ClassConstructor<Category> {
    return Category;
  }

  beforeInsert(event: InsertEvent<Category>): void | Promise<any> {
    this.logger.log('[Category] Inserted category', event.entity);
  }

  beforeRemove(event: RemoveEvent<Category>): void | Promise<any> {
    this.logger.log('[Category] Removed category', event.entity);
  }
}
