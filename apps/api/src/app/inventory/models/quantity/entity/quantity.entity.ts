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
import { ID } from 'core/dto';
import { hashPassword } from 'auth';

import { IQuantity } from 'common/inventory/interfaces/quantity';

import { Sku } from '../../sku';

import { Store } from '../../store';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Quantity extends BaseEntity implements IQuantity<ID, ID> {
  @Field()
  @Column({
    type: 'int',
    nullable: false,
    unique: false,
    transformer: [],
  })
  quantity: number;

  @ManyToOne(() => Sku, { eager: true, nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  sku?: ID;

  @ManyToOne(() => Store, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  store?: ID;
}
