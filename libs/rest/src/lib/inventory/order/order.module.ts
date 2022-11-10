import { Order, OrderView } from 'models/inventory/order';

import { Sku } from 'models/inventory/sku';

import { Store } from 'models/inventory/store';

import { Transaction } from 'models/inventory/transaction';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderPostController } from './order-post.controller';
import { OrderQueryController } from './order-query.controller';
import { OrderService } from './order.service';
import { OrderSubscriber } from './order.subscriber';

@Module({
  imports: [
    TypeOrmModule.forFeature([Order, OrderView, Sku, Store, Transaction]),
  ],
  controllers: [OrderQueryController, OrderPostController],
  providers: [OrderService, OrderSubscriber],
})
export class OrderModule {}
