import {
  BaseEntity,
  Column,
  Relation,
} from 'api-core';
import { Entity } from 'typeorm';

import { Customer } from '../customer';

@Entity()
export class Credit extends BaseEntity<Credit> {
  @Column({ type: 'numeric', unique: false, nullable: false })
  credit: any;

  @Relation('many-to-one', Customer)
  customer: Customer;
}
