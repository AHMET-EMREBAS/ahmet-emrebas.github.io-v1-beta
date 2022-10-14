import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Department extends BaseEntity<Department> {
  @Column({ type: 'text', unique: true })
  name: string;
}
