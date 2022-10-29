import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  ProductController,
  ProductOwnController,
} from './controllers';
import {
  Product,
  ProductSubscriber,
  ProductView,
} from './entities';
import { ProductService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductView])],
  controllers: [ProductController, ProductOwnController],
  providers: [ProductService, ProductSubscriber],
  exports: [ProductService],
})
export class ProductModule {}
