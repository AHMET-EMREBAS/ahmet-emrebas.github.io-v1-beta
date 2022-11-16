import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IStore } from 'common/inventory/interfaces/store';

import { Pricelevel } from '../../pricelevel';

@InputType()
export class UpdateStoreDto implements Partial<IStore<Pricelevel>> {
  @Field()
  @Validations({
    type: 'string',

    minLength: 2,

    maxLength: 30,
  })
  @Expose()
  name: string;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  pricelevel: Pricelevel;
}
