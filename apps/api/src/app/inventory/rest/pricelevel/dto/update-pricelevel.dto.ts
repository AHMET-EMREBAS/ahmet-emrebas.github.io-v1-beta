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

import { IPricelevel } from 'common/inventory/interfaces/pricelevel';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdatePricelevelDto implements Partial<IPricelevel> {
  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 3,
    maxLength: 20,

    required: false,
    nullable: true,
  })
  @MinLength(3)
  @MaxLength(20)
  @IsOptional()
  @Expose()
  name: string;
}
