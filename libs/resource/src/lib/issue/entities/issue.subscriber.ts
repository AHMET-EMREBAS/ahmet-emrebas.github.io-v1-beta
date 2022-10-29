import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Issue } from './issue.entity';

@EventSubscriber()
export class IssueSubscriber implements EntitySubscriberInterface<Issue> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Issue events.
   */
  listenTo() {
    return Issue;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Issue>) {
    this.eventEmitter.emit('issue.entity.INSERT', event.entity);
  }
}
