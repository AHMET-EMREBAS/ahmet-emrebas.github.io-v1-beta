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

@Entity()
export class Transaction extends BaseEntity {
  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  complete: string;
}
