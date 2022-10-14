import { BaseEntity, Relation } from 'api-core';
import { Column, Entity } from 'typeorm';

import { Category } from '../category';

import { Department } from '../department';

@Entity()
export class Product extends BaseEntity<Product> {
  @Column({ type: 'text', unique: true })
  barcode: string;

  @Column({ type: 'text', unique: true })
  name: string;

  @Column({ type: 'text', unique: false })
  description: string;

  @Relation('many-to-one', Category)
  category: Category;

  @Relation('many-to-one', Department)
  department: Department;
}
