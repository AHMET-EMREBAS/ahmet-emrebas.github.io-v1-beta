import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

import { Product } from '../product';

import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity<Quantity> {
  @Column({ type: 'number', unique: false })
  quantity: number;

  @Relation('many-to-one', Product)
  product: Product;

  @Relation('many-to-one', Store)
  store: Store;
}
