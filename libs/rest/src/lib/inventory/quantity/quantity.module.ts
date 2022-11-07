import { Quantity, QuantityView } from 'models/inventory/quantity';

import { Product } from 'models/inventory/product';

import { Store } from 'models/inventory/store';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuantityPostController } from './quantity-post.controller';
import { QuantityQueryController } from './quantity-query.controller';
import { QuantityService } from './quantity.service';
import { QuantitySubscriber } from './quantity.subscriber';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([Quantity, QuantityView, Product, Store]),
    EventEmitterModule,
  ],
  controllers: [QuantityQueryController, QuantityPostController],
  providers: [QuantityService, QuantitySubscriber],
  exports: [QuantityService],
})
export class QuantityModule {}
