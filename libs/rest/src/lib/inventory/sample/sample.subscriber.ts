import { ClassConstructor } from 'core';
import { Sample } from 'models/inventory/sample';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface<Sample> {
  logger = new Logger(SampleSubscriber.name);

  listenTo(): ClassConstructor<Sample> {
    return Sample;
  }

  beforeInsert(event: InsertEvent<Sample>): void | Promise<any> {
    this.logger.log('[Sample] Inserted sample', event.entity);
  }

  beforeRemove(event: RemoveEvent<Sample>): void | Promise<any> {
    this.logger.log('[Sample] Removed sample', event.entity);
  }
}
