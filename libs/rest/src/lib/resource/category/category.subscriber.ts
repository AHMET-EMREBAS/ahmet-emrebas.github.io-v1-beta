import { ClassConstructor } from 'core';
import { Category } from 'models';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class CategorySubscriber implements EntitySubscriberInterface<Category> {
  listenTo(): ClassConstructor<Category> {
    return Category;
  }

  afterInsert(event: InsertEvent<Category>): void | Promise<any> {
    console.log(`[INSERTED] Category `);
    console.table(event.entity);
  }
}
