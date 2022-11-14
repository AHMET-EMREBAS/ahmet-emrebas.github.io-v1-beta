import { Expose } from 'class-transformer';
import { ICategory } from 'common/inventory/interfaces';
import { Validations } from 'core/validations';

import {
  Field,
  InputType,
} from '@nestjs/graphql';

@InputType()
export class CreateCategoryDto implements ICategory {
  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 20,
  })
  @Expose()
  name: string;
}
