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

import { IQuantity } from 'common/inventory/interfaces/quantity';

@InputType()
export class CreateQuantityDto implements IQuantity<ID, ID> {
  @Field()
  @ApiProperty({
    type: 'number',

    minimum: -200,
    maximum: 999999999999,

    required: false,
    nullable: true,
  })
  @Min(-200)
  @Max(999999999999)
  @IsOptional()
  @Expose()
  quantity: number;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsNotEmpty()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  sku: ID;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsNotEmpty()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  store: ID;
}
