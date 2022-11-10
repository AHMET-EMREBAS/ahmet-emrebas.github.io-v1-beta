import { Sku, SkuView } from 'models/inventory/sku';

import { Variant } from 'models/inventory/variant';

import { Product } from 'models/inventory/product';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SkuPostController } from './sku-post.controller';
import { SkuQueryController } from './sku-query.controller';
import { SkuService } from './sku.service';
import { SkuSubscriber } from './sku.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Sku, SkuView, Variant, Product])],
  controllers: [SkuQueryController, SkuPostController],
  providers: [SkuService, SkuSubscriber],
})
export class SkuModule {}
