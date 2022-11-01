import { ClassConstructor } from 'core';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { Category } from './category.entity';

@EventSubscriber()
export class CategoryEventSubscriber
  implements EntitySubscriberInterface<Category>
{
  listenTo(): ClassConstructor<Category> {
    return Category;
  }

  afterInsert(event: InsertEvent<Category>): void | Promise<any> {
    console.log(`[INSERTED] Category `);
    console.table(event.entity);
  }
}
