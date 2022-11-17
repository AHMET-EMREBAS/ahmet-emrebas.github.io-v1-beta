import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Category,
  CategoryView,
} from '../../models/category';
import { CategoryViewService } from './category-view.service';
import { CategoryController } from './category.controller';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategorySubscriber } from './category.subscriber';

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  providers: [
    CategoryResolver,
    CategoryService,
    CategoryViewService,
    CategorySubscriber,
  ],
})
export class CategoryModule {}
