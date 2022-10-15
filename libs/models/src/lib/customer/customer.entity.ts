import { BaseEntity, Relation, Column } from 'api-core';
import { Entity } from 'typeorm';

@Entity()
export class Customer extends BaseEntity<Customer> {
  @Column({ type: 'text', unique: true, transform: '' })
  username: string;

  @Column({ type: 'text', unique: true, transform: '' })
  password: string;

  @Column({ type: 'text', unique: true, transform: '' })
  phone: string;

  @Column({ type: 'text', unique: true, transform: '' })
  email: string;
}
