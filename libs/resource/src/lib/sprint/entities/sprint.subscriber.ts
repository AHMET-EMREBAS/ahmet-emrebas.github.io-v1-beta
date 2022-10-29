import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Sprint } from './sprint.entity';

@EventSubscriber()
export class SprintSubscriber implements EntitySubscriberInterface<Sprint> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Sprint events.
   */
  listenTo() {
    return Sprint;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Sprint>) {
    this.eventEmitter.emit('sprint.entity.INSERT', event.entity);
  }
}
