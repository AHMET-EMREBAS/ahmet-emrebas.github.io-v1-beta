import { BaseEntity, Relation, Column } from 'api-core';
import { Entity } from 'typeorm';

import { Customer } from '../customer';

@Entity()
export class Credit extends BaseEntity<Credit> {
  @Column({ type: 'numeric', unique: false, transform: '' })
  credit: any;

  @Relation('many-to-one', Customer)
  customer: Customer;
}
