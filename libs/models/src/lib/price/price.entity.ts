import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

import { Pricelevel } from '../pricelevel';

@Entity()
export class Price extends BaseEntity<Price> {
  @Column({ type: 'numeric', unique: true })
  cost: any;

  @Column({ type: 'numeric', unique: true })
  price: any;

  @Column({ type: 'numeric', unique: true })
  usedCost: any;

  @Column({ type: 'numeric', unique: true })
  usedPrice: any;

  @Relation('many-to-one', Pricelevel)
  priceLevel: Pricelevel;
}
