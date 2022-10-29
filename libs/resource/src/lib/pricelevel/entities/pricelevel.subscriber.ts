import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Pricelevel } from './pricelevel.entity';

@EventSubscriber()
export class PricelevelSubscriber implements EntitySubscriberInterface<Pricelevel> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Pricelevel events.
   */
  listenTo() {
    return Pricelevel;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Pricelevel>) {
    this.eventEmitter.emit('pricelevel.entity.INSERT', event.entity);
  }
}
