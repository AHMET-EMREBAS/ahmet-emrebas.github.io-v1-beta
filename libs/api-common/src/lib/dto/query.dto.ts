import {
  Exclude,
  Expose,
  Transform,
} from 'class-transformer';

import { ApiProperty } from '@nestjs/swagger';

@Exclude()
export class QueryDTO {
  @ApiProperty({ type: 'boolean', required: false })
  @Expose()
  @Transform(({ value }) => {
    if (value === 'true') {
      return true;
    } else {
      return false;
    }
  })
  withDeleted: boolean;

  @ApiProperty({ type: 'number', required: false })
  @Expose()
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
  @Transform(({ value }) => {
    const v = parseInt(value);

    if (v && v > 0 && v <= 100) {
      return v;
    }

    return 20;
  })
  take: number;

  @ApiProperty({ type: 'object', required: false, default: { id: 'ASC' } })
  @Expose()
  @Transform(({ value }) => {
    if (value && typeof value == 'string') {
      try {
        const result = JSON.parse(value);
        return result;
      } catch (err) {
        return undefined;
      }
    }
  })
  order: { [key: string]: 'ASC' | 'DESC' };

  @ApiProperty({
    type: 'string',
    isArray: true,
    required: false,
    default: ['id'],
  })
  @Expose()
  @Transform(({ value }) => {
    if (value?.push) {
      return value;
    }

    if (value && typeof value == 'string') {
      try {
        const result = JSON.parse(value);
        return result;
      } catch (err) {
        return undefined;
      }
    }
  })
  select: string[];
}
