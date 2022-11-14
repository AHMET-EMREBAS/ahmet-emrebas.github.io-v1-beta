import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { IPrice } from 'common/inventory/interfaces/price';

import { Sku } from '../../sku';

import { Pricelevel } from '../../pricelevel';

@InputType()
export class CreatePriceDto implements IPrice<Sku, Pricelevel> {
  @Field()
  @Validations({
    type: 'number',

    minimum: 0,

    maximum: 999999999999,
  })
  @Expose()
  price: number;

  @Field()
  @Validations({
    type: 'number',

    minimum: 0,

    maximum: 999999999999,
  })
  @Expose()
  cost: number;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  sku: Sku;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  pricelevel: Pricelevel;
}
