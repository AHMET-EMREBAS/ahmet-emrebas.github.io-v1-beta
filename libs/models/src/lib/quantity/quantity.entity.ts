import {
  BaseEntity,
  Relation,
} from 'api-core';
import {
  Column,
  Entity,
} from 'typeorm';

import { Product } from '../product';
import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity<Quantity> {
  @Column({ type: 'int', unique: false })
  quantity: any;

  @Relation('many-to-one', Product)
  product: Product;

  @Relation('many-to-one', Store)
  store: Store;
}
