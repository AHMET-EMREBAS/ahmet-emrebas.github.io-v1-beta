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

import { Product } from '../../product';

@Entity()
@ObjectType()
export class Sku extends BaseEntity {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: true, unique: false })
  barcode: string;

  @Field()
  @Column({ type: 'text', nullable: true, unique: false })
  description: string;

  @ManyToOne(() => Product, {
    eager: true,
    nullable: false,
  })
  @JoinColumn()
  product: Product;
}
