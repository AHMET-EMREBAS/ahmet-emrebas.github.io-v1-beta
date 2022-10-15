import { BaseEntity, Relation, Column } from 'api-core';
import { Entity } from 'typeorm';

import { Permission } from '../permission';

@Entity()
export class User extends BaseEntity<User> {
  @Column({ type: 'text', unique: true, transform: '' })
  username: string;

  @Column({ type: 'text', unique: true, transform: '' })
  password: string;

  @Column({ type: 'text', unique: false, transform: 'json' })
  workhours: string;

  @Relation('many-to-many', Permission)
  permissions: Permission[];
}
