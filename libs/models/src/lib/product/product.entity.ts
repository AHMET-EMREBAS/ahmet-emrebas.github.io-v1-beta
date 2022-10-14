import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';
import { Category } from '../';

@Entity()
export class Product extends BaseEntity<Product> {
  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'text', unique: false })
  description: string;

  @Relation('many-to-one', Category)
  category: Category;
}
