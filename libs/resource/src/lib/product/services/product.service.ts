import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Product,
  ProductView,
} from '../entities';

@Injectable()
export class ProductService extends ResourceService<Product, ProductView> {
  constructor(
    @InjectRepository(Product) repo: Repository<Product>,
    @InjectRepository(ProductView) viewRepo: Repository<ProductView>
  ) {
    super(repo, viewRepo);
  }
}
