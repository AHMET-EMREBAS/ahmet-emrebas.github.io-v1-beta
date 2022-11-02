import { ClassConstructor } from 'core';
import { Sub } from 'models';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class SubSubscriber implements EntitySubscriberInterface<Sub> {
  listenTo(): ClassConstructor<Sub> {
    return Sub;
  }

  afterInsert(event: InsertEvent<Sub>): void | Promise<any> {
    console.log(`[INSERTED] Sub `);
    console.table(event.entity);
  }
}
