import { Expose } from 'class-transformer';
import { Validations } from 'core/validations';

import {
  Field,
  InputType,
} from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 50,
  })
  @Expose()
  name: string;

  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 500,
  })
  @Expose()
  description: string;

  @Field()
  @Validations({ minimum: 1 })
  @Expose()
  categoryId: number;

  @Field()
  @Validations({ minimum: 1 })
  @Expose()
  departmentId: number;
}
