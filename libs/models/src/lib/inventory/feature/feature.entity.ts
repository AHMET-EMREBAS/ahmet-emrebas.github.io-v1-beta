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
export class Feature extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  feature: string;
}
