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

import { ICategory } from 'common/inventory/interfaces/category';

@InputType()
export class CreateCategoryDto implements ICategory {
  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 20,

    required: false,
    nullable: true,
  })
  @MaxLength(20)
  @IsOptional()
  @Expose()
  name: string;
}
