import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CategoryView } from 'models/inventory/category';

@Injectable()
export class CategoryViewService extends ResourceViewService<CategoryView> {
  constructor(@InjectRepository(CategoryView) repo: Repository<CategoryView>) {
    super(repo);
  }
}
