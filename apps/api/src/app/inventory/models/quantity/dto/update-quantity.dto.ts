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

import { IQuantity } from 'common/inventory/interfaces/quantity';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class UpdateQuantityDto implements Partial<IQuantity<ID, ID>> {
  @Field()
  @ApiProperty({
    type: 'number',

    minimum: -200,
    maximum: 999999999999,
  })
  @Min(-200)
  @Max(999999999999)
  @Expose()
  quantity: number;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  sku: ID;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: false })
  @Expose()
  store: ID;
}
