import { Expose } from 'class-transformer';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  ValidateNested,
} from 'class-validator';

import {
  Field,
  InputType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class FilterDto {
  @ApiProperty({ type: 'string' })
  @Field()
  @IsNotEmpty()
  @IsIn(['contains'])
  @Expose()
  matchMode: string;

  @Field()
  @IsOptional()
  @Expose()
  operator: 'or' | 'and';

  @Field()
  @IsNotEmpty()
  @MaxLength(50)
  @Expose()
  value: string;
}

@InputType()
export class QueryFieldDto {
  @Field()
  @IsOptional()
  name: FilterDto;
}

@InputType()
export class QuerySampleDto {
  @Field()
  @ValidateNested()
  where: QueryFieldDto[];
}
