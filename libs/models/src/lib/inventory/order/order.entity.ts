import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Sku } from '../sku';

import { Store } from '../store';

import { Transaction } from '../transaction';

@Entity()
export class Order extends BaseEntity {
  @Col({
    type: 'integer',
    unique: false,
    nullable: false,
  })
  quantity: integer;

  @Col({
    type: 'number',
    unique: false,
    nullable: false,
  })
  unitprice: number;

  @Col({
    type: 'number',
    unique: false,
    nullable: false,
  })
  discount: number;

  @Col({
    type: 'boolean',
    unique: false,
    nullable: false,
  })
  taxExempt: boolean;

  @ManyToOne(() => Sku)
  @JoinColumn()
  sku: Sku;

  @ManyToOne(() => Store)
  @JoinColumn()
  store: Store;

  @ManyToOne(() => Transaction)
  @JoinColumn()
  transaction: Transaction;
}
