import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  PromotionController,
  PromotionOwnController,
} from './controllers';
import {
  Promotion,
  PromotionSubscriber,
  PromotionView,
} from './entities';
import { PromotionService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Promotion, PromotionView])],
  controllers: [PromotionController, PromotionOwnController],
  providers: [PromotionService, PromotionSubscriber],
  exports: [PromotionService],
})
export class PromotionModule {}
