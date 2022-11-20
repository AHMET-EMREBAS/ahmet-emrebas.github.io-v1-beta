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
import { hashPassword } from 'core/transformers';

import { IPrice } from 'common/inventory/interfaces/price';

import { Sku } from '../../sku';

import { Pricelevel } from '../../pricelevel';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Price extends BaseEntity implements IPrice<ID, ID> {
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

  @ManyToOne(() => Sku, { eager: true, nullable: true, onDelete: 'CASCADE' })
  @JoinColumn()
  sku?: ID;

  @ManyToOne(() => Pricelevel, {
    eager: true,
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  pricelevel?: ID;
}
