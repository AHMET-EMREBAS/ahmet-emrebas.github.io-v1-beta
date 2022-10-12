import { RepositoryService } from 'api-core';
import { Product } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService extends RepositoryService<Product> {
  constructor(
    @InjectRepository(Product) productRepository: Repository<Product>
  ) {
    super(productRepository);
  }
}
