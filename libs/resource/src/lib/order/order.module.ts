import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  OrderController,
  OrderOwnController,
} from './controllers';
import {
  Order,
  OrderSubscriber,
  OrderView,
} from './entities';
import { OrderService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderView])],
  controllers: [OrderController, OrderOwnController],
  providers: [OrderService, OrderSubscriber],
  exports: [OrderService],
})
export class OrderModule {}
