import { Variant, VariantView } from 'models/inventory/variant';

import { Feature } from 'models/inventory/feature';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { VariantPostController } from './variant-post.controller';
import { VariantQueryController } from './variant-query.controller';
import { VariantService } from './variant.service';
import { VariantSubscriber } from './variant.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Variant, VariantView, Feature])],
  controllers: [VariantQueryController, VariantPostController],
  providers: [VariantService, VariantSubscriber],
})
export class VariantModule {}
