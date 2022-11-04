import { CrudService } from 'core';
import { Product, ProductView } from 'models/inventory/product';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService extends CrudService<Product, ProductView> {
  constructor(
    @InjectRepository(Product) mainRepo: Repository<Product>,
    @InjectRepository(ProductView) viewRepo: Repository<ProductView>
  ) {
    super(mainRepo, viewRepo);
  }
}
