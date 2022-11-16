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

import { IUser } from 'common/inventory/interfaces/user';

import { Permission } from '../../permission';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser<Permission[]> {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  username: string;

  @Field()
  @Column({ type: 'text', nullable: false, unique: false })
  password: string;

  @ManyToMany(() => Permission, { eager: true, nullable: false })
  @JoinTable()
  permission?: Permission;
}
