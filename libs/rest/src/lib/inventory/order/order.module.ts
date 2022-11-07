import { Order, OrderView } from 'models/inventory/order';

import { Product } from 'models/inventory/product';

import { Pricelevel } from 'models/inventory/pricelevel';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrderPostController } from './order-post.controller';
import { OrderQueryController } from './order-query.controller';
import { OrderService } from './order.service';
import { OrderSubscriber } from './order.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderView, Product, Pricelevel])],
  controllers: [OrderQueryController, OrderPostController],
  providers: [OrderService, OrderSubscriber],
  exports: [OrderService],
})
export class OrderModule {}
