import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Quantity, QuantityView } from '../../models/quantity';

import { QuantityViewService } from './quantity-view.service';
import { QuantityController } from './quantity.controller';
import { QuantityResolver } from './quantity.resolver';
import { QuantityService } from './quantity.service';
import { QuantitySubscriber } from './quantity.subscriber';

@Module({
  controllers: [QuantityController],
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView])],
  providers: [
    QuantityResolver,
    QuantityService,
    QuantityViewService,
    QuantitySubscriber,
  ],
})
export class QuantityModule {}
