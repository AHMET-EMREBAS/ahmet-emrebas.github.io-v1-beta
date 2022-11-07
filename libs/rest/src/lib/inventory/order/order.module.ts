import { Order, OrderView } from 'models/inventory/order';

import { Product } from 'models/inventory/product';

import { Pricelevel } from 'models/inventory/pricelevel';

import { Transaction } from 'models/inventory/transaction';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderPostController } from './order-post.controller';
import { OrderQueryController } from './order-query.controller';
import { OrderService } from './order.service';
import { OrderSubscriber } from './order.subscriber';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderView,

      Product,

      Pricelevel,

      Transaction,
    ]),
    EventEmitterModule,
  ],
  controllers: [OrderQueryController, OrderPostController],
  providers: [OrderService, OrderSubscriber],
  exports: [OrderService],
})
export class OrderModule {}
