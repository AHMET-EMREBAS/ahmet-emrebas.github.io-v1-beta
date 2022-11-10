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
export class Location extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  location: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  x: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  y: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: true,
  })
  z: string;
}
