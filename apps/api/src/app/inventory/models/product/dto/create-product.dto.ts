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

import { IProduct } from 'common/inventory/interfaces/product';

@InputType()
export class CreateProductDto implements IProduct<ID, ID> {
  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 3,
    maxLength: 50,
  })
  @MinLength(3)
  @MaxLength(50)
  @Expose()
  name: string;

  @Field()
  @ApiProperty({
    type: 'number',

    maximum: 999999999999,
  })
  @Max(999999999999)
  @Expose()
  price: number;

  @Field()
  @ApiProperty({
    type: 'number',

    maximum: 999999999999,
  })
  @Max(999999999999)
  @Expose()
  cost: number;

  @Field()
  @ApiProperty({
    type: 'number',

    maximum: 999999999999,
  })
  @Max(999999999999)
  @Expose()
  quantity: number;

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
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  category: ID;

  @ApiProperty({ type: ID })
  @Field(() => ID, { nullable: true })
  @Type(() => ID)
  @IsOptional()
  @ValidateNested()
  @IsNotEmptyObject({ nullable: true })
  @Expose()
  department: ID;
}
