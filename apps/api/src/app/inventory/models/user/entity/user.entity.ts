import { hashPassword } from 'auth';
import { IUser } from 'common/inventory/interfaces/user';
import { ID } from 'core/dto';
import { BaseEntity } from 'core/entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
} from 'typeorm';

import {
  Field,
  ObjectType,
} from '@nestjs/graphql';

import { Permission } from '../../permission';

@Entity()
@ObjectType()
export class User extends BaseEntity implements IUser<ID[]> {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  username: string;

  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: false,
    transformer: { to: (value) => hashPassword(value), from: (value) => value },
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
