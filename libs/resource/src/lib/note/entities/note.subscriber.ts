import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Note } from './note.entity';

@EventSubscriber()
export class NoteSubscriber implements EntitySubscriberInterface<Note> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Note events.
   */
  listenTo() {
    return Note;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Note>) {
    this.eventEmitter.emit('note.entity.INSERT', event.entity);
  }
}
