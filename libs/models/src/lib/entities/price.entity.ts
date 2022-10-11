import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsOptional,
  Min,
} from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';
import { Pricelevel } from './price-level.entity';
import { Sku } from './sku.entity';

@Entity()
@Exclude()
export class Price extends BaseEntity {
  @Expose()
  @Column({ type: 'numeric', nullable: true })
  @Min(0)
  @IsOptional()
  cost: number;

  @Expose()
  @Column({ type: 'numeric', nullable: true })
  @Min(0)
  @IsOptional()
  usedCost: number;

  @Expose()
  @Column({ type: 'numeric', nullable: true })
  @Min(0)
  @IsOptional()
  price: number;

  @Expose()
  @Column({ type: 'numeric', nullable: true })
  @Min(0)
  @IsOptional()
  usedPrice: number;

  @ManyToOne(() => Pricelevel, { eager: true })
  @JoinColumn()
  pricelevel: Pricelevel;

  @ManyToOne(() => Sku, { eager: true })
  @JoinColumn()
  sku: Sku;
}
