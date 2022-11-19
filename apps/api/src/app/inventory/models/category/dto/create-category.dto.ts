import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { ICategory } from 'common/inventory/interfaces/category';

@InputType()
export class CreateCategoryDto implements ICategory {
  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 20,
  })
  @Expose()
  name: string;
}
