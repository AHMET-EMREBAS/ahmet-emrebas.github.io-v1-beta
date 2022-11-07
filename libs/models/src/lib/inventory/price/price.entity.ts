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

@Entity()
export class Price extends BaseEntity {
  @Col({
    type: 'decimal',
  })
  price: number;

  @Col({
    type: 'decimal',
  })
  cost: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;
}
