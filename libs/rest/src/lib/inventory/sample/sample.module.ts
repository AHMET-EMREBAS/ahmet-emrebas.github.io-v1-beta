import { Sample, SampleView } from 'models/inventory/sample';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SamplePostController } from './sample-post.controller';
import { SampleQueryController } from './sample-query.controller';
import { SampleService } from './sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sample, SampleView])],
  controllers: [SampleQueryController, SamplePostController],
  providers: [SampleService],
})
export class SampleModule {}
