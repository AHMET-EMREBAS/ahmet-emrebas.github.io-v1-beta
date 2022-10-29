import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  SampleController,
  SampleOwnController,
} from './controllers';
import {
  Sample,
  SampleSubscriber,
  SampleView,
} from './entities';
import { SampleService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleController, SampleOwnController],
  providers: [SampleService, SampleSubscriber],
  exports: [SampleService],
})
export class SampleModule {}
