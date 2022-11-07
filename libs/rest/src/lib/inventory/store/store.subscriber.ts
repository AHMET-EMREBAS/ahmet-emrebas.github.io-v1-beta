import { ClassConstructor } from 'core';
import { Store } from 'models/inventory/store';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class StoreSubscriber implements EntitySubscriberInterface<Store> {
  logger = new Logger(StoreSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Store> {
    return Store;
  }

  beforeInsert(event: InsertEvent<Store>): void | Promise<any> {
    this.logger.log('[Store] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Store>): void | Promise<any> {
    this.logger.log('[Store] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
