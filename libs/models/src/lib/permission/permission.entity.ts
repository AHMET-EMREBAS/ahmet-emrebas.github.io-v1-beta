import { BaseEntity } from 'api-core';
import {
  Column,
  Entity,
} from 'typeorm';

@Entity()
export class Permission extends BaseEntity<Permission> {
  @Column({
    type: 'text',
    unique: true,
    transformer: {
      to: (value) => value && JSON.stringify(value || {}),
      from: (value) => value && JSON.parse(value),
    },
  })
  name: string;
}
