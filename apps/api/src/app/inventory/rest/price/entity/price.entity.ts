import { IPrice } from 'common/inventory/interfaces/price';
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

import { Pricelevel } from '../../pricelevel';
import { Sku } from '../../sku';

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
  price?: number;

  @Field()
  @Column({
    type: 'numeric',
    nullable: true,
    unique: false,
    transformer: [],
  })
  cost?: number;

  @ManyToOne(() => Sku, { eager: true, nullable: true })
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
