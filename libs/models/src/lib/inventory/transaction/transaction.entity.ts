import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Transaction extends BaseEntity {
  @Col({
    type: 'boolean',

    nullable: true,
  })
  complete: boolean;
}
