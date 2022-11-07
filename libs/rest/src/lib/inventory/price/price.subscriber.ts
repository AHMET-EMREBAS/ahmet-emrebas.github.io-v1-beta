import { ClassConstructor } from 'core';
import { Price } from 'models/inventory/price';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  RemoveEvent,
} from 'typeorm';

import { Logger } from '@nestjs/common';

@EventSubscriber()
export class PriceSubscriber implements EntitySubscriberInterface<Price> {
  logger = new Logger(PriceSubscriber.name);

  listenTo(): ClassConstructor<Price> {
    return Price;
  }

  beforeInsert(event: InsertEvent<Price>): void | Promise<any> {
    this.logger.log('[Price] Inserted price', event.entity);
  }

  beforeRemove(event: RemoveEvent<Price>): void | Promise<any> {
    this.logger.log('[Price] Removed price', event.entity);
  }
}
