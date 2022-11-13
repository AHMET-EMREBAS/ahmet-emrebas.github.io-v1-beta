import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleView } from './entity/sample-view.entity';
import { Sample } from './entity/sample.entity';
import { SampleViewService } from './sample-view.service';
import { SampleController } from './sample.controller';
import { SampleResolver } from './sample.resolver';
import { SampleService } from './sample.service';
import { SampleSubscriber } from './sample.subscriber';

@Module({
  controllers: [SampleController],
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  providers: [
    SampleResolver,
    SampleService,
    SampleViewService,
    SampleSubscriber,
  ],
})
export class SampleModule {}
