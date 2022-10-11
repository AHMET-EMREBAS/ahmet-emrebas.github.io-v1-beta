import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  Min,
} from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { BaseEntity } from '../common/base.entity';
import { Pricelevel } from './price-level.entity';
import { Sku } from './sku.entity';
import { Store } from './store.entity';

@Entity()
@Exclude()
export class Sale extends BaseEntity {
  @Expose()
  @IsNotEmpty()
  @ManyToOne(() => Sku, { eager: true })
  @JoinColumn()
  item: Sku;

  @Expose()
  @Column({ type: 'int' })
  @Min(0)
  quantity: number;

  @Expose()
  @Column({ type: 'numeric', nullable: true })
  customUnitPrice: number;

  @Expose()
  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;

  @CreateDateColumn() soldAt: Date;

  @ManyToOne(() => Store, { eager: true })
  @JoinColumn()
  store: Store;
}
