import { BaseEntity, Relation, Column } from 'api-core';
import { Entity } from 'typeorm';

@Entity()
export class Resource extends BaseEntity<Resource> {
  @Column({ type: 'text', unique: true, nullable: false, transform: '' })
  name: string;
}
