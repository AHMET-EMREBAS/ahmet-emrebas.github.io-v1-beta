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

import { IDepartment } from 'common/inventory/interfaces/department';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateDepartmentDto implements Partial<IDepartment> {
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
