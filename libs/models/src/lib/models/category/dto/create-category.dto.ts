import { ShortTextProperty } from 'swagger-property';

import { PickType } from '@nestjs/swagger';

import { Category } from '../category.entity';

export class CreateCategoryDto extends PickType(Category, ['name']) {
  @ShortTextProperty({ nullable: false })
  name: string;
}
