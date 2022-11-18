import { BaseEntity } from 'core/entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { IProduct } from 'common/inventory/interfaces/product';

import { Category } from '../../category';

import { Department } from '../../department';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Product
  extends BaseEntity
  implements IProduct<Category, Department>
{
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;

  @Field()
  @Column({ type: 'numeric', nullable: true, unique: false })
  price: number;

  @Field()
  @Column({ type: 'numeric', nullable: true, unique: false })
  cost: number;

  @Field()
  @Column({ type: 'text', nullable: true, unique: false })
  description: string;

  @ManyToOne(() => Category, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  category?: Category;

  @ManyToOne(() => Department, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  department?: Department;
}
