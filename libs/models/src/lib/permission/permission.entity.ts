import {
  BaseEntity,
  Column,
} from 'api-core';
import { Entity } from 'typeorm';

@Entity()
export class Permission extends BaseEntity<Permission> {
  @Column({ type: 'text', unique: true, transform: 'json' })
  name: string;
}
