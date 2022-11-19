import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { IStore } from 'common/inventory/interfaces/store';

@InputType()
export class CreateStoreDto implements IStore<ID> {
  @Field()
  @Validations({
    type: 'string',

    minLength: 2,

    maxLength: 30,
  })
  @Expose()
  name: string;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  pricelevel: ID;
}
