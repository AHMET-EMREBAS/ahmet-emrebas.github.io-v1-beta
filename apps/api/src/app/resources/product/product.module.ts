import { Product, ProductView } from 'models';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductView])],
  controllers: [ProductController, ProductViewController],
  providers: [ProductService, ProductViewService],
})
export class ProductModule {}
