import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IPriceLevel,
  IStore,
} from 'commonjs';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

import { BaseEntity } from './base.entity';
import { PriceLevel } from './price-level';

@Entity()
@Exclude()
export class Store extends BaseEntity implements IStore {
  @Expose()
  @ApiProperty({
    type: 'number',
    required: false,
    description: 'Pricelevel ID',
    minimum: 1,
  })
  @ManyToOne(() => PriceLevel, { eager: true, nullable: true })
  @JoinColumn()
  priceLevel: IPriceLevel;

  @Expose()
  @ApiProperty({
    type: 'text',
    required: true,
    uniqueItems: true,
    minLength: 3,
  })
  @Column({ type: 'text', unique: true })
  name: string;
}
