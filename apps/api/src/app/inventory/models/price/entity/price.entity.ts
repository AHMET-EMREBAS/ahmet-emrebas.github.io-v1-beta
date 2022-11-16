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

import { IPrice } from 'common/inventory/interfaces/price';

import { Sku } from '../../sku';

import { Pricelevel } from '../../pricelevel';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Price extends BaseEntity implements IPrice<Sku, Pricelevel> {
  @Field()
  @Column({ type: 'numeric', nullable: true, unique: false })
  price: number;

  @Field()
  @Column({ type: 'numeric', nullable: true, unique: false })
  cost: number;

  @ManyToOne(() => Sku, { eager: true, nullable: true })
  @JoinColumn()
  sku?: Sku;

  @ManyToOne(() => Pricelevel, { eager: true, nullable: true })
  @JoinColumn()
  pricelevel?: Pricelevel;
}
