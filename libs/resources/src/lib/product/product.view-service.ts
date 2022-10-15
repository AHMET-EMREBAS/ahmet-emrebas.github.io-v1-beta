import { RepositoryService } from 'api-core';
import { ProductView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductViewService extends RepositoryService<ProductView> {
  constructor(
    @InjectRepository(ProductView)
    productViewRepository: Repository<ProductView>
  ) {
    super(productViewRepository);
  }
}
