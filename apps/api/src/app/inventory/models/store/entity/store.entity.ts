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

import { IStore } from 'common/inventory/interfaces/store';

import { Pricelevel } from '../../pricelevel';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Store extends BaseEntity implements IStore<ID> {
  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
    transformer: [],
  })
  name: string;

  @ManyToOne(() => Pricelevel, {
    eager: true,
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn()
  pricelevel?: ID;
}
