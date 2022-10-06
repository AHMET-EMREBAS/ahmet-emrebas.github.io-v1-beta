import {
  Exclude,
  Expose,
} from 'class-transformer';
import { IPriceLevel } from 'commonjs';
import {
  Column,
  Entity,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from './base.entity';

@Entity()
@Exclude()
export class PriceLevel extends BaseEntity implements IPriceLevel {
  @ApiProperty({
    type: 'string',
    required: true,
    minLength: 3,
    uniqueItems: true,
  })
  @Expose()
  @Column({ type: 'text', unique: true })
  name: string;
}
