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

import { IUser } from 'common/inventory/interfaces/user';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateUserDto implements Partial<IUser<ID[]>> {
  @Field()
  @ApiProperty({
    type: 'specific',

    format: 'email',
    required: false,
    nullable: true,
  })
  @IsEmail()
  @IsOptional()
  @Expose()
  username: string;

  @Field()
  @ApiProperty({
    type: 'specific',

    required: false,
    nullable: true,
  })
  @IsOptional()
  @Expose()
  password: string;

  @ApiProperty({ type: [ID] })
  @Field(() => [ID], { nullable: true })
  @Type(() => ID)
  @IsOptional({ each: true })
  @ValidateNested({ each: true })
  @Expose()
  permission: ID[];
}
