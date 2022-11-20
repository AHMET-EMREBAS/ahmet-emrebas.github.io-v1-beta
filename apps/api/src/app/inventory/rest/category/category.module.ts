import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Category, CategoryView } from './entity';

import { CategoryViewService } from './category-view.service';
import { CategoryController } from './category.controller';
import { CategoryResolver } from './category.resolver';
import { CategoryService } from './category.service';
import { CategorySubscriber } from './category.subscriber';

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([Category, CategoryView], 'inventory')],
  providers: [
    CategoryResolver,
    CategoryService,
    CategoryViewService,
    CategorySubscriber,
  ],
})
export class CategoryModule {}
