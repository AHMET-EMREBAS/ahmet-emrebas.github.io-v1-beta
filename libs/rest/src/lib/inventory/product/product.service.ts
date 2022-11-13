import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Product } from 'models/inventory/product';

@Injectable()
export class ProductService extends ResourceService<Product> {
  constructor(@InjectRepository(Product) repo: Repository<Product>) {
    super(repo);
  }
}
