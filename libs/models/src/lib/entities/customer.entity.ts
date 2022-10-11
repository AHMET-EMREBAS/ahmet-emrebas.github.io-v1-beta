import {
  Exclude,
  Expose,
} from 'class-transformer';
import { IsOptional } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../common';
import { Pricelevel } from './price-level.entity';

@Entity()
@Exclude()
export class Customer extends BaseEntity {
  @Expose()
  @IsOptional()
  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Expose()
  @IsOptional()
  @Column({ type: 'text', nullable: true })
  lastName: string;

  @Expose()
  @IsOptional()
  @Column({ type: 'text', nullable: true, unique: true })
  company: string;

  @Expose()
  @IsOptional()
  @Column({ type: 'text', nullable: true, unique: true })
  email: string;

  @Expose()
  @IsOptional()
  @Column({ type: 'text', nullable: true, unique: true })
  phone: string;

  @ManyToOne(() => Pricelevel, { eager: true })
  @JoinColumn()
  priceLevel: Pricelevel;
}
