import { BaseEntity } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Department extends BaseEntity<Department> {
  @Column({ type: 'text' }) name: string;
}
