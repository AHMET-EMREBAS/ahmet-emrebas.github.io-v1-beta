import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Project } from './project.entity';

@EventSubscriber()
export class ProjectSubscriber implements EntitySubscriberInterface<Project> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Project events.
   */
  listenTo() {
    return Project;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Project>) {
    this.eventEmitter.emit('project.entity.INSERT', event.entity);
  }
}
