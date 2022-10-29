import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { EventEmitter2 } from '@nestjs/event-emitter';

import { Article } from './article.entity';

@EventSubscriber()
export class ArticleSubscriber implements EntitySubscriberInterface<Article> {
  constructor(
    dataSource: DataSource,
    private readonly eventEmitter: EventEmitter2
  ) {
    dataSource.subscribers.push(this);
  }

  /**
   * Indicates that this subscriber only listen to Article events.
   */
  listenTo() {
    return Article;
  }

  /**
   * Called before post insertion.
   */
  beforeInsert(event: InsertEvent<Article>) {
    this.eventEmitter.emit('article.entity.INSERT', event.entity);
  }
}
