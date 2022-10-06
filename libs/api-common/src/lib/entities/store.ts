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

import { BaseEntity } from './base.entity';
import { PriceLevel } from './price-level';

@Entity()
export class Store extends BaseEntity implements IStore {
  @ManyToOne(() => PriceLevel, { eager: true, nullable: true })
  @JoinColumn()
  priceLevel: IPriceLevel;

  @Column({ type: 'text', unique: true })
  name: string;
}
