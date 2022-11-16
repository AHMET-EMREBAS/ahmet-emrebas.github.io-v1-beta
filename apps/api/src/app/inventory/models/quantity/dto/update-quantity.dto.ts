import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

import { IQuantity } from 'common/inventory/interfaces/quantity';

import { Sku } from '../../sku';

import { Store } from '../../store';

@InputType()
export class UpdateQuantityDto implements Partial<IQuantity<Sku, Store>> {
  @Field()
  @Validations({
    type: 'number',

    min: -200,

    max: 999999999999,
  })
  @Expose()
  quantity: number;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  sku: Sku;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  store: Store;
}
