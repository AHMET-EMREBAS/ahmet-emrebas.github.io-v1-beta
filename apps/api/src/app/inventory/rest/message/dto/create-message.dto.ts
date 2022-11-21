import { Expose, Type } from 'class-transformer';
import {
  IsNotEmpty,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsNotEmptyObject,
  IsOptional,
  ValidateNested,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IMessage } from 'common/inventory/interfaces/message';

@InputType()
export class CreateMessageDto implements IMessage<ID, ID> {
  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 50,

    required: false,
    nullable: true,
  })
  @MaxLength(50)
  @IsOptional()
  @Expose()
  subject: string;

  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 400,

    required: false,
    nullable: true,
  })
  @MaxLength(400)
  @IsOptional()
  @Expose()
  message: string;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsNotEmpty()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  receiver: ID;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  sender: ID;
}
