import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { IQuantity } from 'common/inventory/interfaces/quantity';

@InputType()
export class CreateQuantityDto implements IQuantity<ID, ID> {
  @Field()
  @Validations({
    type: 'number',

    min: -200,

    max: 999999999999,
  })
  @Expose()
  quantity: number;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  sku: ID;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  store: ID;
}
