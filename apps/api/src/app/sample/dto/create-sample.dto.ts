import { Expose } from 'class-transformer';
import {
  IsNotEmpty,
  MaxLength,
  MinLength,
} from 'class-validator';

import {
  Field,
  InputType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class CreateSampleDto {
  @Field()
  @ApiProperty({
    type: 'string',
    minLength: 3,
    maxLength: 3,
    nullable: false,
  })
  @Expose()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;
}
