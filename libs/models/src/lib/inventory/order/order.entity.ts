import {
  BaseEntity,
  Col,
} from 'core';
import {
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { Pricelevel } from '../pricelevel';
import { Product } from '../product';

@Entity()
export class Order extends BaseEntity {
  @Col({
    type: 'number',
  })
  quantity: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;

  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;
}
