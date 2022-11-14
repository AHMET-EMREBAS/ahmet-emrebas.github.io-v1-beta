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

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Pricelevel extends BaseEntity {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  name: string;
}
