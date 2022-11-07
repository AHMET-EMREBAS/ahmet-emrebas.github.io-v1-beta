import { Sample, SampleView } from 'models/inventory/sample';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SamplePostController } from './sample-post.controller';
import { SampleQueryController } from './sample-query.controller';
import { SampleService } from './sample.service';
import { SampleSubscriber } from './sample.subscriber';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView]), EventEmitterModule],
  controllers: [SampleQueryController, SamplePostController],
  providers: [SampleService, SampleSubscriber],
  exports: [SampleService],
})
export class SampleModule {}
