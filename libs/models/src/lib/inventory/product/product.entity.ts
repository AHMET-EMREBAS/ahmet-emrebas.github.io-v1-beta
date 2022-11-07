import { BaseEntity, Col } from 'core';
import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Category } from '../category';

import { Department } from '../department';

@Entity()
export class Product extends BaseEntity {
  @Col({
    type: 'string',

    unique: true,
  })
  name: string;

  @Col({
    type: 'string',
  })
  description: string;

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Department)
  @JoinColumn()
  department: Department;
}
