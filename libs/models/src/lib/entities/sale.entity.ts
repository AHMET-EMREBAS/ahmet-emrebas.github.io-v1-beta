import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
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
import { Sku } from './sku.entity';

@Entity()
@Exclude()
export class Sale extends BaseEntity {
  @Expose()
  @IsNotEmpty()
  @ManyToOne(() => Sku, { eager: true })
  @JoinColumn()
  sku: Sku;

  @Expose()
  @Column({ type: 'int' })
  @Min(0)
  quantity: number;

  @Expose()
  @Column({ type: 'numeric', nullable: true })
  @IsOptional()
  customPrice: number;

  @Expose()
  @Column({ type: 'numeric', nullable: true })
  @IsOptional()
  discount: number;
}
