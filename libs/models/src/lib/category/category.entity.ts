import { BaseEntity } from 'api-core';
import { Column, Entity } from 'typeorm';

@Entity()
export class Category extends BaseEntity<Category> {
  @Column({ type: 'text' }) name: string;
}
