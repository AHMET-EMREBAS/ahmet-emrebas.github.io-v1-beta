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

import { User } from '../../to';

import { User } from '../../from';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Message extends BaseEntity implements IMessage<User, User> {
  @Field()
  @Column({ type: 'text', nullable: false, unique: false })
  message: string;

  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn()
  to?: User;

  @ManyToOne(() => User, { eager: true, nullable: false })
  @JoinColumn()
  from?: User;
}
