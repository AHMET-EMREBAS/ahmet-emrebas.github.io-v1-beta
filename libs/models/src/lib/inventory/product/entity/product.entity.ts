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

import { Category } from '../../category';

import { Department } from '../../department';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Product extends BaseEntity {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: true, unique: false })
  description: string;

  @ManyToOne(() => Category, { eager: true, nullable: false })
  @JoinColumn()
  category?: Category;

  @ManyToOne(() => Department, { eager: true, nullable: false })
  @JoinColumn()
  department?: Department;
}
