import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Sku, SkuView } from './entity';

import { SkuViewService } from './sku-view.service';
import { SkuController } from './sku.controller';
import { SkuResolver } from './sku.resolver';
import { SkuService } from './sku.service';
import { SkuSubscriber } from './sku.subscriber';

@Module({
  controllers: [SkuController],
  imports: [TypeOrmModule.forFeature([Sku, SkuView], 'inventory')],
  providers: [SkuResolver, SkuService, SkuViewService, SkuSubscriber],
})
export class SkuModule {}
