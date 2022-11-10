import { Price, PriceView } from 'models/inventory/price';

import { Sku } from 'models/inventory/sku';

import { Pricelevel } from 'models/inventory/pricelevel';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PricePostController } from './price-post.controller';
import { PriceQueryController } from './price-query.controller';
import { PriceService } from './price.service';
import { PriceSubscriber } from './price.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Price, PriceView, Sku, Pricelevel])],
  controllers: [PriceQueryController, PricePostController],
  providers: [PriceService, PriceSubscriber],
})
export class PriceModule {}
