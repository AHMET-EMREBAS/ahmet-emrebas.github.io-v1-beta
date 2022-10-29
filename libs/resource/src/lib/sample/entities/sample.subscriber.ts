import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Sample } from './sample.entity';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface<Sample> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
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
    this.eventEmitter.emit('sample.entity.INSERT', event.entity);
  }
}
