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

import { Pricelevel } from '../pricelevel';

@Entity()
export class Price extends BaseEntity {
  @Col({
    type: 'currency',
    unique: false,
    nullable: false,
  })
  price: currency;

  @Col({
    type: 'currency',
    unique: false,
    nullable: false,
  })
  cost: currency;

  @ManyToOne(() => Sku)
  @JoinColumn()
  sku: Sku;

  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;
}
