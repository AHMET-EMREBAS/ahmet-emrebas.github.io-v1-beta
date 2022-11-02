import { ClassConstructor } from 'core';
import { Sample } from 'models';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface<Sample> {
  listenTo(): ClassConstructor<Sample> {
    return Sample;
  }

  afterInsert(event: InsertEvent<Sample>): void | Promise<any> {
    console.log(`[INSERTED] Sample `);
    console.table(event.entity);
  }
}
