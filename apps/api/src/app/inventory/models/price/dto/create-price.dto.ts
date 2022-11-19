import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { IPrice } from 'common/inventory/interfaces/price';

@InputType()
export class CreatePriceDto implements IPrice<ID, ID> {
  @Field()
  @Validations({
    type: 'number',

    min: 0,

    max: 999999999999,
  })
  @Expose()
  price: number;

  @Field()
  @Validations({
    type: 'number',

    min: 0,

    max: 999999999999,
  })
  @Expose()
  cost: number;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  sku: ID;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  pricelevel: ID;
}
