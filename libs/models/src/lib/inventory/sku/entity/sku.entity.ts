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

import { Product } from '../../product';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Sku extends BaseEntity {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  barcode: string;

  @Field()
  @Column({ type: 'text', nullable: true, unique: false })
  description: string;

  @ManyToOne(() => Product, { eager: true, nullable: false })
  @JoinColumn()
  product?: Product;
}
