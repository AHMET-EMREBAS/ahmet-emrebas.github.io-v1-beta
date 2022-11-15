import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { IPermission } from 'common/inventory/interfaces/permission';

@InputType()
export class CreatePermissionDto implements IPermission {
  @Field()
  @Validations({
    type: 'string',

    minLength: 3,

    maxLength: 20,
  })
  @Expose()
  name: string;

  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 50,
  })
  @Expose()
  description: string;
}
