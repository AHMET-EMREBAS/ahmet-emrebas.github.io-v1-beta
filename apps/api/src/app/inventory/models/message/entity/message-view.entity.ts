import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Message } from './message.entity';

import { IMessage } from 'common/inventory/interfaces/message';

import { User } from '../../to';

import { User } from '../../from';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('message.id', 'id')
      .addSelect('message.uuid', 'uuid')
      .addSelect('message.createdAt', 'createdAt')
      .addSelect('message.updatedAt', 'updatedAt')
      .addSelect('message.deletedAt', 'deletedAt')
      .addSelect('message.active', 'active')

      .addSelect('message.message', 'message')

      .addSelect('to.username', 'username')

      .addSelect('from.username', 'username')

      .from(Message, 'message')

      .leftJoin(User, 'to', 'to.id = message.toId')

      .leftJoin(User, 'from', 'from.id = message.fromId');
  },
})
export class MessageView implements IMessage<string, string> {
  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  message: string;

  @Field()
  @ViewColumn()
  username: string;

  @Field()
  @ViewColumn()
  username: string;

  @Field()
  @ViewColumn()
  createdAt: Date;

  @Field()
  @ViewColumn()
  updatedAt: Date;

  @Field()
  @ViewColumn()
  deletedAt: Date;

  @Field()
  @ViewColumn()
  active: boolean;
}
