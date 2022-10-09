import {
  Exclude,
  Expose,
} from 'class-transformer';
import { IPriceLevel } from 'commonjs';
import {
  Column,
  Entity,
} from 'typeorm';

import { Property } from '../property';
import { BaseEntity } from './base.entity';

@Entity()
@Exclude()
export class PriceLevel extends BaseEntity implements IPriceLevel {
  @Property({
    type: 'string',
    inputType: 'text',
    required: true,
    minLength: 3,
    maxLength: 20,
    unique: true,
  })
  @Expose()
  @Column({ type: 'text', unique: true })
  name: string;
}
