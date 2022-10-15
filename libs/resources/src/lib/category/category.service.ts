import { RepositoryService } from 'api-core';
import { Category } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends RepositoryService<Category> {
  constructor(
    @InjectRepository(Category) categoryRepository: Repository<Category>
  ) {
    super(categoryRepository);
  }
}
