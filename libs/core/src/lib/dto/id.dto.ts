import {
  Expose,
  Transform,
} from 'class-transformer';
import { IsNumber } from 'class-validator';

import {
  Field,
  InputType,
  Int,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class ID {
  @Field(() => Int)
  @ApiProperty({ type: 'number', minimum: 1 })
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  @Expose()
  id: number;
}
