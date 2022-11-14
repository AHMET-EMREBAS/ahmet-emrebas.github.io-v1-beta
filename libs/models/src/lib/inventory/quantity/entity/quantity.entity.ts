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

import { IQuantity } from 'common/inventory/interfaces/quantity';

import { Sku } from '../../sku';

import { Store } from '../../store';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Quantity extends BaseEntity implements IQuantity<Sku, Store> {
  @Field()
  @Column({ type: 'int', nullable: false, unique: false })
  quantity: number;

  @ManyToOne(() => Sku, { eager: true, nullable: false })
  @JoinColumn()
  sku?: Sku;

  @ManyToOne(() => Store, { eager: true, nullable: false })
  @JoinColumn()
  store?: Store;
}
