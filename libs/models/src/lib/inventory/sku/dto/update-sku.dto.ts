import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { Product } from '../../product';

@InputType()
export class UpdateSkuDto {
  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 30,
  })
  @Expose()
  name: string;

  @Field()
  @Validations({
    type: 'string',

    minLength: 10,

    maxLength: 13,
  })
  @Expose()
  barcode: string;

  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 500,
  })
  @Expose()
  description: string;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  product: Product;
}
