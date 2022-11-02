import { CrudService } from 'core';
import {
  Category,
  CategoryView,
} from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends CrudService<Category, CategoryView> {
  constructor(
    @InjectRepository(Category) mainRepo: Repository<Category>,
    @InjectRepository(CategoryView) viewRepo: Repository<CategoryView>
  ) {
    super(mainRepo, viewRepo);
  }
}
