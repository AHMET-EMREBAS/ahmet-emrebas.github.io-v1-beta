import { BaseEntity, Relation, Column } from 'api-core';
import { Entity } from 'typeorm';

import { Permission } from '../permission';

@Entity()
export class User extends BaseEntity<User> {
  @Column({ type: 'text', unique: true, nullable: false, transform: '' })
  username: string;

  @Column({ type: 'text', unique: true, nullable: false, transform: '' })
  password: string;

  @Column({ type: 'text', unique: true, nullable: true, transform: '' })
  pin: string;

  @Column({ type: 'text', unique: false, nullable: true, transform: 'json' })
  workhours: string;

  @Relation('many-to-many', Permission)
  permissions: Permission[];
}
