import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

import { Pricelevel } from '../pricelevel';

@Entity()
export class Price extends BaseEntity<Price> {
  @Column({ type: 'number', unique: true })
  cost: number;

  @Column({ type: 'number', unique: true })
  price: number;

  @Column({ type: 'number', unique: true })
  usedCost: number;

  @Column({ type: 'number', unique: true })
  usedPrice: number;

  @Relation('many-to-one', Pricelevel)
  priceLevel: Pricelevel;
}
