import { Feature, FeatureView } from 'models/inventory/feature';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { FeaturePostController } from './feature-post.controller';
import { FeatureQueryController } from './feature-query.controller';
import { FeatureService } from './feature.service';
import { FeatureSubscriber } from './feature.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Feature, FeatureView])],
  controllers: [FeatureQueryController, FeaturePostController],
  providers: [FeatureService, FeatureSubscriber],
})
export class FeatureModule {}
