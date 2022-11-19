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

import { IUser } from 'common/inventory/interfaces/user';

import { Permission } from '../../permission';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser<ID[]> {
  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: true,
    transformer: [],
  })
  username: string;

  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: false,
    transformer: [
      { to: (value) => hashPassword(value), from: (value) => value },
    ],
  })
  password: string;

  @ManyToMany(() => Permission, {
    eager: true,
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({ name: 'user-permission' })
  permission?: ID[];
}
