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

import { IPricelevel } from 'common/inventory/interfaces/pricelevel';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Pricelevel extends BaseEntity implements IPricelevel {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;
}
