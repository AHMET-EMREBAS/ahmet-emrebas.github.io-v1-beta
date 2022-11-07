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

import { Pricelevel } from '../pricelevel';

@Entity()
export class Order extends BaseEntity {
  @Col({
    type: 'int',
  })
  quantity: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;
}
