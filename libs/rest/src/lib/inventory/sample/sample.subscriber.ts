import { ClassConstructor } from 'core';
import { Sample } from 'models/inventory/sample';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class SampleSubscriber implements EntitySubscriberInterface<Sample> {
  logger = new Logger(SampleSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Sample> {
    return Sample;
  }

  beforeInsert(event: InsertEvent<Sample>): void | Promise<any> {
    this.logger.log('[Sample] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Sample>): void | Promise<any> {
    this.logger.log('[Sample] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
