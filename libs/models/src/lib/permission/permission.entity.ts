import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Permission extends BaseEntity<Permission> {
  @Column({ type: 'text', unique: true })
  name: string;
}
