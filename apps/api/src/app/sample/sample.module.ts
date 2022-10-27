import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SampleSubscriber,
  SampleView,
} from './entities';
import { Sample } from './entities/sample.entity';
import { SampleController } from './sample.controller';
import { SampleService } from './sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController],
  providers: [SampleService, SampleSubscriber],
  exports: [SampleService],
})
export class SampleModule {}
