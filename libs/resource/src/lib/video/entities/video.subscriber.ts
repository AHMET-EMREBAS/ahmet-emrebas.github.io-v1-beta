import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Video } from './video.entity';

@EventSubscriber()
export class VideoSubscriber implements EntitySubscriberInterface<Video> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Video events.
   */
  listenTo() {
    return Video;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Video>) {
    this.eventEmitter.emit('video.entity.INSERT', event.entity);
  }
}
