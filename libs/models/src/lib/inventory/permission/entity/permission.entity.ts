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

import { IPermission } from 'common/inventory/interfaces/permission';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Permission extends BaseEntity implements IPermission {
  @Field()
  @Column({ type: 'date', nullable: false, unique: true })
  name: string;

  @Field()
  @Column({ type: 'text', nullable: true, unique: false })
  description: string;
}
