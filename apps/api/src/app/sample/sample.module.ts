import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleEntity } from './entity/sample.entity';
import { SampleController } from './sample.controller';
import { SampleResolver } from './sample.resolver';

@Module({
  controllers: [SampleController],
  imports: [TypeOrmModule.forFeature([SampleEntity])],
  providers: [SampleResolver],
})
export class SampleModule {}
