import {
  Category,
  CategoryView,
} from 'models/inventory/category';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryPostController } from './category-post.controller';
import { CategoryQueryController } from './category-query.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryQueryController, CategoryPostController],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
