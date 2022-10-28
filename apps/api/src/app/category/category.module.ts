import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  CategoryController,
  CategoryOwnController,
} from './controllers';
import {
  Category,
  CategorySubscriber,
  CategoryView,
} from './entities';
import { CategoryService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryController, CategoryOwnController],
  providers: [CategoryService, CategorySubscriber],
  exports: [CategoryService],
})
export class CategoryModule {}
