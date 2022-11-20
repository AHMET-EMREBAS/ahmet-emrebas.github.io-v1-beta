import { IProduct } from 'common/inventory/interfaces/product';
import { ID } from 'core/dto';
import { BaseEntity } from 'core/entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import {
  Field,
  ObjectType,
} from '@nestjs/graphql';

import { Category } from '../../category';
import { Department } from '../../department';

@Entity()
@ObjectType()
export class Product extends BaseEntity implements IProduct<ID, ID> {
  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
    transformer: [],
  })
  name: string;

  @Field()
  @Column({
    type: 'numeric',
    nullable: true,
    unique: false,
    transformer: [],
  })
  price: number;

  @Field()
  @Column({
    type: 'numeric',
    nullable: true,
    unique: false,
    transformer: [],
  })
  cost: number;

  @Field()
  @Column({
    type: 'int',
    nullable: true,
    unique: false,
    transformer: [],
  })
  quantity: number;

  @Field()
  @Column({
    type: 'text',
    nullable: true,
    unique: false,
    transformer: [],
  })
  description: string;

  @ManyToOne(() => Category, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  category?: ID;

  @ManyToOne(() => Department, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  department?: ID;
}
