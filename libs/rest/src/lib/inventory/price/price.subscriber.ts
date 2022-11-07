import { ClassConstructor } from 'core';
import { Price } from 'models/inventory/price';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface<Price> {
  logger = new Logger(PriceSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Price> {
    return Price;
  }

  beforeInsert(event: InsertEvent<Price>): void | Promise<any> {
    this.logger.log('[Price] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Price>): void | Promise<any> {
    this.logger.log('[Price] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
