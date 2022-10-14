import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity<Category> {
  @Column({ type: 'text', unique: true })
  name: string;
}
