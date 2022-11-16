import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

import { IPrice } from 'common/inventory/interfaces/price';

import { Sku } from '../../sku';

import { Pricelevel } from '../../pricelevel';

@InputType()
export class UpdatePriceDto implements Partial<IPrice<Sku, Pricelevel>> {
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
  @Validations({ min: 1 })
  @Expose()
  sku: Sku;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  pricelevel: Pricelevel;
}
