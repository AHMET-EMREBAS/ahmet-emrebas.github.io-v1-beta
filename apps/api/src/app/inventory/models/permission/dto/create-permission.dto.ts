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

import { IPermission } from 'common/inventory/interfaces/permission';

@InputType()
export class CreatePermissionDto implements IPermission {
  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 3,
    maxLength: 20,
  })
  @MinLength(3)
  @MaxLength(20)
  @Expose()
  name: string;

  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 50,
  })
  @MaxLength(50)
  @Expose()
  description: string;
}
