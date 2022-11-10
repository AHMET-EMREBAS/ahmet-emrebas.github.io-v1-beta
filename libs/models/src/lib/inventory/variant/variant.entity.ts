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

import { Feature } from '../feature';

@Entity()
export class Variant extends BaseEntity {
  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  value: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  code: string;

  @ManyToOne(() => Feature)
  @JoinColumn()
  feature: Feature;
}
