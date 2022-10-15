import { Category, CategoryView } from 'models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryViewController } from './category.view-controller';
import { CategoryViewService } from './category.view-service';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryView])],
  controllers: [CategoryController, CategoryViewController],
  providers: [CategoryService, CategoryViewService],
})
export class CategoryModule {}
