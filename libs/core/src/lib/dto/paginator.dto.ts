/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Expose,
  Transform,
} from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsNumber,
  IsOptional,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { FindOptionsOrder } from 'typeorm';

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
    required: false,
    default: 20,
  })
  @Field((value) => Int, { defaultValue: 20, nullable: true })
  @Expose()
  @IsOptional()
  @Min(0)
  @Max(100)
  @IsNumber()
  @Transform(({ value }) => parseIntOrDefault(value, 20) % 101)
  take: number;

  @ApiProperty({
    minimum: 0,
    required: false,
    default: 0,
  })
  @Field((value) => Int, { defaultValue: 0, nullable: true })
  @Expose()
  @IsOptional()
  @Min(0)
  @IsNumber()
  @Transform(({ value }) => parseIntOrDefault(value, 0))
  skip: number;

  @ApiProperty({
    type: 'boolean',
    required: false,
    default: false,
  })
  @Field((value) => Boolean, { defaultValue: false, nullable: true })
  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => parseBoolean(value))
  @Expose()
  withDeleted: boolean;

  @ApiProperty({ maxLength: 30, required: false })
  @Field((value) => String, { defaultValue: 'id', nullable: true })
  @IsOptional()
  @MaxLength(50)
  sortField?: string;

  @ApiProperty({ enum: ['ASC', 'DESC'], required: false })
  @Field((value) => String, { defaultValue: 'ASC', nullable: true })
  @IsIn(['1', '-1', 'asc', 'desc', 'ASC', 'DESC'])
  @IsOptional()
  sortOrder?: string;

  @Expose()
  @Transform(({ obj }) => {
    const field = obj.sortField || 'id';
    const sortDir = obj.sortOrder === '1' ? 'ASC' : 'DESC';

    return {
      [field]: sortDir,
    };
  })
  order: FindOptionsOrder<any>;
}
