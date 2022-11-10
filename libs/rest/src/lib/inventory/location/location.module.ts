import { Location, LocationView } from 'models/inventory/location';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LocationPostController } from './location-post.controller';
import { LocationQueryController } from './location-query.controller';
import { LocationService } from './location.service';
import { LocationSubscriber } from './location.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Location, LocationView])],
  controllers: [LocationQueryController, LocationPostController],
  providers: [LocationService, LocationSubscriber],
})
export class LocationModule {}
