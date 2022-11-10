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
export class Category extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  category: string;
}
