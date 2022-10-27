import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { Sample } from './sample.entity';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface<Sample> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Sample events.
   */
  listenTo() {
    return Sample;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Sample>) {
    console.log(`BEFORE POST INSERTED: `, event.entity);
  }
}
