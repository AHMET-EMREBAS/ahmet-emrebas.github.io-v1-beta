import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { ValidateNested } from 'class-validator';

import { IUser } from 'common/inventory/interfaces/user';

@InputType()
export class UpdateUserDto implements Partial<IUser<ID[]>> {
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
  @ValidateNested({ each: true })
  @Type(() => ID)
  @Expose()
  permission: ID[];
}
