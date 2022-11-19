import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

import { ISku } from 'common/inventory/interfaces/sku';

@InputType()
export class UpdateSkuDto implements Partial<ISku<ID>> {
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

    minLength: 0,

    maxLength: 500,
  })
  @Expose()
  description: string;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  product: ID;
}
