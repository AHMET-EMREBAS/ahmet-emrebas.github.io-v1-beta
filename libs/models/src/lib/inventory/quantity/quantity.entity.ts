import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Product } from '../product';

import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity {
  @Col({
    type: 'int',
  })
  quantity: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Store)
  @JoinColumn()
  store: Store;
}
