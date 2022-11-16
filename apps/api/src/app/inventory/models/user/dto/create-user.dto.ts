import { Expose } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { IUser } from 'common/inventory/interfaces/user';
import { ID } from 'core/dto';
import { Validations } from 'core/validations';

import {
  Field,
  InputType,
} from '@nestjs/graphql';

import { Permission } from '../../permission';

@InputType()
export class CreateUserDto implements IUser<Permission[]> {
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
