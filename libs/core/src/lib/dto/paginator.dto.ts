import {
  Expose,
  Transform,
} from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  Max,
  Min,
} from 'class-validator';

import {
  Field,
  InputType,
  Int,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

import {
  parseBoolean,
  parseIntOrDefault,
} from '../transformers';

@InputType()
export class PaginatorDto {
  @ApiProperty({
    minimum: 1,
    maximum: 100,
    nullable: true,
    default: 20,
  })
  @Field(() => Int, { defaultValue: 20, nullable: true })
  @Expose()
  @IsOptional()
  @Min(0)
  @Max(100)
  @IsNumber()
  @Transform(({ value }) => parseIntOrDefault(value, 20) % 101)
  take: number;

  @ApiProperty({
    minimum: 0,
    nullable: true,
    default: 0,
  })
  @Field(() => Int, { defaultValue: 0, nullable: true })
  @Expose()
  @IsOptional()
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseIntOrDefault(value, 0))
  skip: number;

  @IsOptional()
  @ApiProperty({
    nullable: true,
    default: false,
    enum: [true, false],
  })
  @Field(() => Boolean, { defaultValue: false, nullable: true })
  @IsBoolean()
  @Transform(({ value }) => parseBoolean(value))
  @Expose()
  withDeleted: boolean;
}
