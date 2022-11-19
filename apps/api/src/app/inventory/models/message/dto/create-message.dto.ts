import { Expose, Type } from 'class-transformer';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';
import { ValidateNested } from 'class-validator';

import { IMessage } from 'common/inventory/interfaces/message';

@InputType()
export class CreateMessageDto implements IMessage<ID, ID> {
  @Field()
  @Validations({
    type: 'string',

    minLength: 0,

    maxLength: 400,
  })
  @Expose()
  message: string;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  to: ID;

  @Field(() => Int)
  @ValidateNested()
  @Type(() => ID)
  @Expose()
  from: ID;
}
