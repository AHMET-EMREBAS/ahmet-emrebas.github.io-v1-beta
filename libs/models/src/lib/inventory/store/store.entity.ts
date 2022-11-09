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
export class Store extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  name: string;
}
