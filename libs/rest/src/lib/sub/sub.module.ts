import {
  Sub,
  SubView,
} from 'models/sub';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubPostController } from './sub-post.controller';
import { SubQueryController } from './sub-query.controller';
import { SubService } from './sub.service';
import { SubSubscriber } from './sub.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Sub, SubView])],
  controllers: [SubQueryController, SubPostController],
  providers: [SubService, SubSubscriber],
  exports: [SubService],
})
export class SubModule {}
