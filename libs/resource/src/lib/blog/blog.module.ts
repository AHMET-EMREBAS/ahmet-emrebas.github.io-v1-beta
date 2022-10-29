import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  BlogController,
  BlogOwnController,
} from './controllers';
import {
  Blog,
  BlogSubscriber,
  BlogView,
} from './entities';
import { BlogService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, BlogView])],
  controllers: [BlogController, BlogOwnController],
  providers: [BlogService, BlogSubscriber],
  exports: [BlogService],
})
export class BlogModule {}
