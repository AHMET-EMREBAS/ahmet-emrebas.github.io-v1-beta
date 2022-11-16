import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

import { IUser } from 'common/inventory/interfaces/user';

import { Permission } from '../../permission';

@InputType()
export class UpdateUserDto implements Partial<IUser<Permission[]>> {
  @Field()
  @Validations({
    type: 'specific',

    email: true,
  })
  @Expose()
  username: string;

  @Field()
  @Validations({
    type: 'specific',

    password: true,
  })
  @Expose()
  password: string;

  @Field(() => ID)
  @ValidateNested()
  @Expose()
  permission: Permission[];
}
