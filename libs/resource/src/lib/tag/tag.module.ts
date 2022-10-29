import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  TagController,
  TagOwnController,
} from './controllers';
import {
  Tag,
  TagSubscriber,
  TagView,
} from './entities';
import { TagService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, TagView])],
  controllers: [TagController, TagOwnController],
  providers: [TagService, TagSubscriber],
  exports: [TagService],
})
export class TagModule {}
