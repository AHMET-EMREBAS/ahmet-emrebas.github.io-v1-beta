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

import { Sku } from '../../sku';
import { Store } from '../../store';

@Entity()
@ObjectType()
export class Quantity extends BaseEntity {
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
