import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  FeatureController,
  FeatureOwnController,
} from './controllers';
import {
  Feature,
  FeatureSubscriber,
  FeatureView,
} from './entities';
import { FeatureService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Feature, FeatureView])],
  controllers: [FeatureController, FeatureOwnController],
  providers: [FeatureService, FeatureSubscriber],
  exports: [FeatureService],
})
export class FeatureModule {}
