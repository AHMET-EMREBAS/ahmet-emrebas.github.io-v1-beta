import { Expose } from 'class-transformer';
import { Field, InputType } from '@nestjs/graphql';
import { Validations } from 'core/validations';

@InputType()
export class UpdateProductDto {
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
}
