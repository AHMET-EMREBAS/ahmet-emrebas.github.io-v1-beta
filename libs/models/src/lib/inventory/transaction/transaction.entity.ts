import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Order } from '../order';

@Entity()
export class Transaction extends BaseEntity {
  @Col({
    type: 'enum',
    unique: false,
    nullable: false,
  })
  complete: enum;
}
