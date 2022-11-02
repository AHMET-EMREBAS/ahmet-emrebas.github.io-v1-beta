import {
  Category,
  CategoryView,
} from 'models';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryPostController } from './category-post.controller';
import { CategoryQueryController } from './category-query.controller';
import { CategoryService } from './category.service';
import { CategorySubscriber } from './category.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryQueryController, CategoryPostController],
  providers: [CategoryService, CategorySubscriber],
  exports: [CategoryService],
})
export class CategoryModule {}
