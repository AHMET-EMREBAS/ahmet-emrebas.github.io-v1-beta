import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

import { Permission } from '../permission';

@Entity()
export class User extends BaseEntity<User> {
  @Column({ type: 'text', unique: true })
  username: string;

  @Column({ type: 'text', unique: true })
  password: string;

  @Relation('many-to-many', Permission)
  permissions: Permission[];
}
