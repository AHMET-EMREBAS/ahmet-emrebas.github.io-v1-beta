import { IUser } from 'common/inventory/interfaces/user';
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
export class User extends BaseEntity implements IUser<Permission[]> {
  @Field()
  @Column({ type: 'text', nullable: false, unique: true })
  username: string;

  @Field()
  @Column({ type: 'text', nullable: false, unique: false })
  password: string;

  @ManyToMany(() => Permission, {
    eager: true,
    nullable: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinTable({ name: 'user-permission' })
  permission?: Permission[];
}
