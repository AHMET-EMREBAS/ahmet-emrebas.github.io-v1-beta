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

import { IStore } from 'common/inventory/interfaces/store';

import { Pricelevel } from '../../pricelevel';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Store extends BaseEntity implements IStore<Pricelevel> {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Pricelevel, {
    eager: true,
    nullable: true,
    onDelete: 'RESTRICT',
  })
  @JoinColumn()
  pricelevel?: Pricelevel;
}
