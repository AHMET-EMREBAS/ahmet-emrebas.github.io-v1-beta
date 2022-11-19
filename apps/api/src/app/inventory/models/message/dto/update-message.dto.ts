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

import { Field, InputType, Int } from '@nestjs/graphql';
import { Validations } from 'core/validations';
import { ID } from 'core/dto';

import { IMessage } from 'common/inventory/interfaces/message';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateMessageDto implements Partial<IMessage<ID, ID>> {
  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 400,
  })
  @MaxLength(400)
  @Expose()
  message: string;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  to: ID;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  from: ID;
}
