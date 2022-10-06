import { IPriceLevel } from 'commonjs';
import {
  Column,
  Entity,
} from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity()
export class PriceLevel extends BaseEntity implements IPriceLevel {
  @Column({ type: 'text', unique: true })
  name: string;
}
