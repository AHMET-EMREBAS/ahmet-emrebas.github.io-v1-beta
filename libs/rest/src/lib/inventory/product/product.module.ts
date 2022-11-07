import { Product, ProductView } from 'models/inventory/product';

import { Category } from 'models/inventory/category';

import { Department } from 'models/inventory/department';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductPostController } from './product-post.controller';
import { ProductQueryController } from './product-query.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product, ProductView, Category, Department]),
  ],
  controllers: [ProductQueryController, ProductPostController],
  providers: [ProductService],
})
export class ProductModule {}
