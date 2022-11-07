import { ClassConstructor } from 'core';
import { Pricelevel } from 'models/inventory/pricelevel';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@EventSubscriber()
export class PricelevelSubscriber
  implements EntitySubscriberInterface<Pricelevel>
{
  logger = new Logger(PricelevelSubscriber.name);

  constructor(private readonly eventEmitter: EventEmitter2) {}

  listenTo(): ClassConstructor<Pricelevel> {
    return Pricelevel;
  }

  beforeInsert(event: InsertEvent<Pricelevel>): void | Promise<any> {
    this.logger.log('[Pricelevel] Inserted product', event.entity);
    this.eventEmitter.emit('product.beforeInsert', event.entity);
  }

  beforeRemove(event: RemoveEvent<Pricelevel>): void | Promise<any> {
    this.logger.log('[Pricelevel] Removed product', event.entity);
    this.eventEmitter.emit('product.beforeRemove', event.entity);
  }
}
