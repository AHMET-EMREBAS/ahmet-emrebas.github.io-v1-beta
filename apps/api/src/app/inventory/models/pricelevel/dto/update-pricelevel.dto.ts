import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IPricelevel } from 'common/inventory/interfaces/pricelevel';

@InputType()
export class UpdatePricelevelDto implements Partial<IPricelevel> {
  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 20,
  })
  @Expose()
  name: string;
}