import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Permission } from '../permission';

@Entity()
export class User extends BaseEntity {
  @Col({
    type: 'email',
    unique: true,
    nullable: false,
  })
  username: email;

  @Col({
    type: 'password',
    unique: false,
    nullable: false,
  })
  password: password;

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
