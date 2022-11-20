import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ProductView } from './entity';

@Injectable()
export class ProductViewService extends ResourceViewService<ProductView> {
  constructor(@InjectRepository(ProductView) repo: Repository<ProductView>) {
    super(repo);
  }
}
