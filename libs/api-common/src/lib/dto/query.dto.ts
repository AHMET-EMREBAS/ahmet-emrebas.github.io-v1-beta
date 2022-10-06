import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';
import { IsOptional } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class QueryDTO {
  @ApiProperty({
    type: 'boolean',
    required: false,
  })
  @Expose()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === true || value === 'true') {
      return true;
    } else {
      return false;
    }
  })
  withDeleted: boolean;

  @ApiProperty({
    type: 'number',
    required: false,
  })
  @Expose()
  @IsOptional()
  @Transform(({ value }) => {
    const v = parseInt(value);
    if (v > 0) {
      return v;
    }
    return 0;
  })
  skip: number;

  @ApiProperty({
    type: 'number',
    required: false,
  })
  @Expose()
  @IsOptional()
  @Transform(({ value }) => {
    const v = parseInt(value);
    if (v > 100) {
      return 100;
    } else if (v <= 0) {
      return 20;
    }
    return v;
  })
  take: number;

  @ApiProperty({ type: 'object', required: false, default: { id: 'ASC' } })
  @Expose()
  @IsOptional()
  @Transform(({ value }) => {
    if (value && typeof value == 'string') {
      try {
        const result = JSON.parse(value);
        return result;
      } catch (err) {
        return {};
      }
    }
  })
  order: { [key: string]: 'ASC' | 'DESC' };
}
