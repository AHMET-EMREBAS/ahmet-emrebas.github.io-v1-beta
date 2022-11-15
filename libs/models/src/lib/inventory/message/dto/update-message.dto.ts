import { Expose } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IMessage } from 'common/inventory/interfaces/message';

import { User } from '../../to';

import { User } from '../../from';

@InputType()
export class UpdateMessageDto implements Partial<IMessage<User, User>> {
  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 400,
  })
  @Expose()
  message: string;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  to: User;

  @Field(() => Int)
  @Validations({ min: 1 })
  @Expose()
  from: User;
}
