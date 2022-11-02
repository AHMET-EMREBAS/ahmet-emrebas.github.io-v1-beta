import { Category } from 'models';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategorySubscriber } from './category.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService, CategorySubscriber],
})
export class CategoryModule {}
