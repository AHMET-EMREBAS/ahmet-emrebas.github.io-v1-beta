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

import { Variant } from '../variant';

import { Product } from '../product';

@Entity()
export class Sku extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  sku: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  barcode: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  description: string;

  @ManyToMany(() => Variant)
  @JoinTable()
  variants: Variant[];

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;
}
