import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SkuController,
  SkuOwnController,
} from './controllers';
import {
  Sku,
  SkuSubscriber,
  SkuView,
} from './entities';
import { SkuService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Sku, SkuView])],
  controllers: [SkuController, SkuOwnController],
  providers: [SkuService, SkuSubscriber],
  exports: [SkuService],
})
export class SkuModule {}
