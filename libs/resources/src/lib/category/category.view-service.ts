import { RepositoryService } from 'api-core';
import { CategoryView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryViewService extends RepositoryService<CategoryView> {
  constructor(
    @InjectRepository(CategoryView)
    categoryViewRepository: Repository<CategoryView>
  ) {
    super(categoryViewRepository);
  }
}
