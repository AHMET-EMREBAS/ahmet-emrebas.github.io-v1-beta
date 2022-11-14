import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { Sku } from '../../sku';

import { Store } from '../../store';

@InputType()
export class CreateQuantityDto {
  @Field()
  @Validations({
    type: 'number',

    minimum: -200,

    maximum: 999999999999,
  })
  @Expose()
  quantity: number;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  sku: Sku;

  @Field(() => Int)
  @Validations({ minimum: 1 })
  @Expose()
  store: Store;
}
