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

import { Permission } from '../permission';

@Entity()
export class User extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  username: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  password: string;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
