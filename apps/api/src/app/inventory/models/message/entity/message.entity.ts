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

import { IMessage } from 'common/inventory/interfaces/message';

import { User } from '../../user';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Message extends BaseEntity implements IMessage<User, User> {
  @Field()
  @Column({ type: 'text', nullable: false, unique: false })
  message: string;

  @ManyToOne(() => User, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  to?: User;

  @ManyToOne(() => User, { eager: true, nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  from?: User;
}
