import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface {
  logger = new Logger(SampleSubscriber.name);

  beforeInsert(event: InsertEvent<any>): void | Promise<any> {
    this.logger.log('Before insert ', event.entity);
  }
}
