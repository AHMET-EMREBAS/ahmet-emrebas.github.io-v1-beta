import { Quantity, QuantityView } from 'models/inventory/quantity';

import { Sku } from 'models/inventory/sku';

import { Store } from 'models/inventory/store';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { QuantityPostController } from './quantity-post.controller';
import { QuantityQueryController } from './quantity-query.controller';
import { QuantityService } from './quantity.service';
import { QuantitySubscriber } from './quantity.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Quantity, QuantityView, Sku, Store])],
  controllers: [QuantityQueryController, QuantityPostController],
  providers: [QuantityService, QuantitySubscriber],
})
export class QuantityModule {}
