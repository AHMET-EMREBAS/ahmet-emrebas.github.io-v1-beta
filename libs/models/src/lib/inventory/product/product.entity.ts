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

import { Variant } from '../variant';

@Entity()
export class Product extends BaseEntity {
  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  name: string;

  @Col({
    type: 'string',
    unique: false,
    nullable: false,
  })
  description: string;

  @Col({
    type: 'string',
    unique: true,
    nullable: false,
  })
  code: string;

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => Department)
  @JoinColumn()
  department: Department;

  @ManyToMany(() => Variant)
  @JoinTable()
  variants: Variant[];
}
