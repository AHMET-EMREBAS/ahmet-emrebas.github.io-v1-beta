import {
  Expose,
  Transform,
} from 'class-transformer';
import {
  IsOptional,
  MaxLength,
} from 'class-validator';
import { ILike } from 'typeorm';

import {
  Field,
  InputType,
} from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';

@InputType()
export class QueryDto<T = any> {
  @ApiProperty({ type: 'string', required: false })
  @Field()
  @IsOptional()
  @MaxLength(100)
  @Transform(({ value }) =>
    typeof value === 'string' && value.trim().length > 0
      ? value.trim()
      : undefined
  )
  @Expose()
  query: string;

  toContains(properties: Partial<keyof T>[]) {
    const q = this.query && this.query.trim();
    if (q && q.length > 0) {
      return properties.map((e) => ({
        [e]: ILike(`%${this.query.trim()}%`),
      }));
    }
    return null;
  }
}
