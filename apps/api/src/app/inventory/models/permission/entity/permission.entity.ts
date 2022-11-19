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

import { IPermission } from 'common/inventory/interfaces/permission';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Permission extends BaseEntity implements IPermission {
  @Field()
  @Column({
    type: 'date',
    nullable: false,
    unique: true,
    transformer: [],
  })
  name: string;

  @Field()
  @Column({
    type: 'text',
    nullable: true,
    unique: false,
    transformer: [],
  })
  description: string;
}
