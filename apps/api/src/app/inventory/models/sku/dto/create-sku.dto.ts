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

import { ISku } from 'common/inventory/interfaces/sku';

@InputType()
export class CreateSkuDto implements ISku<ID> {
  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 30,

    required: false,
    nullable: true,
  })
  @MaxLength(30)
  @IsOptional()
  @Expose()
  name: string;

  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 10,
    maxLength: 13,

    required: false,
    nullable: true,
  })
  @MinLength(10)
  @MaxLength(13)
  @IsOptional()
  @Expose()
  barcode: string;

  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 500,

    required: false,
    nullable: true,
  })
  @MaxLength(500)
  @IsOptional()
  @Expose()
  description: string;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsNotEmpty()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  product: ID;
}
