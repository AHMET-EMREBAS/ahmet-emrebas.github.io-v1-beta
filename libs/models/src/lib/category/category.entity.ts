import { BaseEntity, Relation, Column } from 'api-core';
import { Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity<Category> {
  @Column({ type: 'text', unique: true, nullable: false })
  name: string;
}
