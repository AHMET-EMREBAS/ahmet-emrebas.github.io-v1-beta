import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Img } from './img.entity';

@EventSubscriber()
export class ImgSubscriber implements EntitySubscriberInterface<Img> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Img events.
   */
  listenTo() {
    return Img;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Img>) {
    this.eventEmitter.emit('img.entity.INSERT', event.entity);
  }
}
