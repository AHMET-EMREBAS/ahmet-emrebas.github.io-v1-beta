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
import { hashPassword } from 'core/transformers';

import { IMessage } from 'common/inventory/interfaces/message';

import { User } from '../../user';

import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Message extends BaseEntity implements IMessage<ID, ID> {
  @Field()
  @Column({
    type: 'text',
    nullable: false,
    unique: false,
    transformer: [],
  })
  message: string;

  @ManyToOne(() => User, { eager: true, nullable: false, onDelete: 'SET NULL' })
  @JoinColumn()
  to?: ID;

  @ManyToOne(() => User, { eager: true, nullable: false, onDelete: 'SET NULL' })
  @JoinColumn()
  from?: ID;
}
