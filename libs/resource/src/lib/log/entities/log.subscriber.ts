import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Log } from './log.entity';

@EventSubscriber()
export class LogSubscriber implements EntitySubscriberInterface<Log> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Log events.
   */
  listenTo() {
    return Log;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Log>) {
    this.eventEmitter.emit('log.entity.INSERT', event.entity);
  }
}
