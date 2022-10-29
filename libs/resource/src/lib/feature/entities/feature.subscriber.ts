import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Feature } from './feature.entity';

@EventSubscriber()
export class FeatureSubscriber implements EntitySubscriberInterface<Feature> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Feature events.
   */
  listenTo() {
    return Feature;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Feature>) {
    this.eventEmitter.emit('feature.entity.INSERT', event.entity);
  }
}
