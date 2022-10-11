import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { BaseEntity } from '../common';
import { Customer } from './customer.entity';
import { Pricelevel } from './price-level.entity';
import { Sale } from './sale.entity';
import { Store } from './store.entity';
import { User } from './user.entity';

@Entity()
@Exclude()
export class Transaction extends BaseEntity {
  @Expose()
  @ManyToOne(() => User)
  @JoinColumn()
  employee: User;

  @Expose()
  @ManyToOne(() => Customer)
  @JoinColumn()
  customer: Customer;

  @Expose()
  @OneToMany(() => Sale, (s) => s.id)
  @JoinTable()
  items: Sale[];

  @Expose()
  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;

  @Expose()
  @ManyToOne(() => Store)
  @JoinColumn()
  store: Store;

  @Expose()
  @Column({ type: 'text', nullable: true })
  @IsOptional()
  status: string;

  @Expose()
  @Column({ type: 'numeric' })
  @IsNotEmpty()
  subTotal: number;

  @Expose()
  @Column({ type: 'numeric' })
  @IsNotEmpty()
  total: number;

  @Expose()
  @Column({ type: 'boolean', default: true })
  tax: boolean;

  @Expose()
  @Column({ type: 'text', nullable: true })
  paymentType: 'card' | 'cache' | 'mixed' | 'store-credit';

  @Expose() @Column({ type: 'numeric', nullable: true }) cacheAmount: number;
  @Expose() @Column({ type: 'numeric', nullable: true }) cardAmount: number;
  @Expose()
  @Column({ type: 'numeric', nullable: true })
  storeCreditAmount: number;

  @Expose()
  @Column({ type: 'boolean', nullable: true })
  complete: boolean;
}
