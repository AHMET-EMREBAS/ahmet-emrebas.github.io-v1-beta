import {
  Sample,
  SampleView,
} from 'models';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SamplePostController } from './sample-post.controller';
import { SampleQueryController } from './sample-query.controller';
import { SampleService } from './sample.service';
import { SampleSubscriber } from './sample.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleQueryController, SamplePostController],
  providers: [SampleService, SampleSubscriber],
  exports: [SampleService],
})
export class SampleModule {}
