import { Price, PriceView } from 'models/inventory/price';

import { Product } from 'models/inventory/product';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PricePostController } from './price-post.controller';
import { PriceQueryController } from './price-query.controller';
import { PriceService } from './price.service';
import { PriceSubscriber } from './price.subscriber';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [
    TypeOrmModule.forFeature([Price, PriceView, Product]),
    EventEmitterModule,
  ],
  controllers: [PriceQueryController, PricePostController],
  providers: [PriceService, PriceSubscriber],
  exports: [PriceService],
})
export class PriceModule {}
