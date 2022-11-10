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

import { Store } from '../store';

@Entity()
export class Quantity extends BaseEntity {
  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  quantity: string;

  @ManyToOne(() => Sku)
  @JoinColumn()
  sku: Sku;

  @ManyToOne(() => Store)
  @JoinColumn()
  store: Store;
}
