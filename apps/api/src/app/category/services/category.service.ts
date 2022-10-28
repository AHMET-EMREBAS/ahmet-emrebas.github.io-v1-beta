import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Category,
  CategoryView,
} from '../entities';

@Injectable()
export class CategoryService extends ResourceService<Category, CategoryView> {
  constructor(
    @InjectRepository(Category) repo: Repository<Category>,
    @InjectRepository(CategoryView) viewRepo: Repository<CategoryView>
  ) {
    super(repo, viewRepo);
  }
}
