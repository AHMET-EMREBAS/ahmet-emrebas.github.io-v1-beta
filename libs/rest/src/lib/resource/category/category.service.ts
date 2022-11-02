import { CrudService } from 'core';
import { Category } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends CrudService<Category> {
  constructor(
    @InjectRepository(Category) private readonly repo: Repository<Category>
  ) {
    super(repo);
  }
}
