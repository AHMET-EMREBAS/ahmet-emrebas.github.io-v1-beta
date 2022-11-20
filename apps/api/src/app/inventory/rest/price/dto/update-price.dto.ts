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

import { IPrice } from 'common/inventory/interfaces/price';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdatePriceDto implements Partial<IPrice<ID, ID>> {
  @Field()
  @ApiProperty({
    type: 'number',

    maximum: 999999999999,

    required: false,
    nullable: true,
  })
  @Max(999999999999)
  @IsOptional()
  @Expose()
  price: number;

  @Field()
  @ApiProperty({
    type: 'number',

    maximum: 999999999999,

    required: false,
    nullable: true,
  })
  @Max(999999999999)
  @IsOptional()
  @Expose()
  cost: number;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  sku: ID;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  pricelevel: ID;
}
