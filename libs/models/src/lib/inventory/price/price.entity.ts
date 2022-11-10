import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';

import { Sku } from '../sku';

import { Pricelevel } from '../pricelevel';

@Entity()
export class Price extends BaseEntity {
  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  price: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  cost: string;

  @ManyToOne(() => Sku)
  @JoinColumn()
  sku: Sku;

  @ManyToOne(() => Pricelevel)
  @JoinColumn()
  pricelevel: Pricelevel;
}
