import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  Length,
} from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';
import { Pricelevel } from './price-level.entity';

@Entity()
@Exclude()
export class Store extends BaseEntity {
  @Expose()
  @Column({ type: 'text', unique: true })
  @Length(3, 20)
  @IsNotEmpty()
  name: string;

  @Expose()
  @ManyToOne(() => Pricelevel, { eager: true })
  @JoinColumn()
  priceLevel: Pricelevel;
}
