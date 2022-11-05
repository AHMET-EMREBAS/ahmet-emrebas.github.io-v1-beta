import {
  Sample,
  SampleView,
} from 'models/inventory/sample';

import {
  Module,
  OnModuleInit,
} from '@nestjs/common';
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
export class SampleModule implements OnModuleInit {
  constructor(private readonly sampleService: SampleService) {}

  async onModuleInit() {
    let i = 0;
    for (const _ of ' '.repeat(1000).split(' ')) {
      await this.sampleService.save({ name: 'data' + ' ' + ++i });
    }
  }
}
