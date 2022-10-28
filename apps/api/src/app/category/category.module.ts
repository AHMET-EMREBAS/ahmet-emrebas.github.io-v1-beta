import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategorySubscriber, CategoryView } from './entities';
import { Category } from './entities/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryController],
  providers: [CategoryService, CategorySubscriber],
  exports: [CategoryService],
})
export class CategoryModule {}
