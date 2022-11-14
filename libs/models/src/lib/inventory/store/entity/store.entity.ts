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

import { Pricelevel } from '../../pricelevel';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Store extends BaseEntity {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;

  @ManyToOne(() => Pricelevel, { eager: true, nullable: false })
  @JoinColumn()
  pricelevel?: Pricelevel;
}
