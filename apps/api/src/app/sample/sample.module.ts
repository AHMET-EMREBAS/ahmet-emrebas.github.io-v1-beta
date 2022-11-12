import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleView } from './entity/sample-view.entity';
import { Sample } from './entity/sample.entity';
import { SampleController } from './sample.controller';

@Module({
  controllers: [SampleController],
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  providers: [SampleController],
})
export class SampleModule {}
