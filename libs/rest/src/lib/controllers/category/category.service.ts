import { CrudService } from 'core';
import { Category } from 'models';

import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService extends CrudService<Category> {}
