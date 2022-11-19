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

import { ISku } from 'common/inventory/interfaces/sku';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateSkuDto implements Partial<ISku<ID>> {
  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 30,
  })
  @MaxLength(30)
  @Expose()
  name: string;

  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 10,
    maxLength: 13,
  })
  @MinLength(10)
  @MaxLength(13)
  @Expose()
  barcode: string;

  @Field()
  @ApiProperty({
    type: 'string',

    maxLength: 500,
  })
  @MaxLength(500)
  @Expose()
  description: string;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  product: ID;
}
