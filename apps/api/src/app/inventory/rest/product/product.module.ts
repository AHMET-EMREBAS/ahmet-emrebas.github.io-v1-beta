import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product, ProductView } from './entity';

import { ProductViewService } from './product-view.service';
import { ProductController } from './product.controller';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { ProductSubscriber } from './product.subscriber';

@Module({
  controllers: [ProductController],
  imports: [TypeOrmModule.forFeature([Product, ProductView])],
  providers: [
    ProductResolver,
    ProductService,
    ProductViewService,
    ProductSubscriber,
  ],
})
export class ProductModule {}
