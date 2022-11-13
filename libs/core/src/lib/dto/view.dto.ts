import {
  Expose,
  Transform,
} from 'class-transformer';
import { IsOptional } from 'class-validator';

import {
  Field,
  InputType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class ViewDto {
  @ApiProperty({ type: 'boolean', required: false })
  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @Expose()
  @Transform(({ value }) => (value === 'true' || value === true ? true : false))
  view: boolean;
}
