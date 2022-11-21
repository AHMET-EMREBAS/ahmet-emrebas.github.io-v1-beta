import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Message } from './message.entity';

import { IMessage } from 'common/inventory/interfaces/message';

import { User } from '../../user';

@ObjectType()
@ViewEntity({
  expression: (ds: DataSource) => {
    return ds
      .createQueryBuilder()
      .select('message.id', 'id')
      .addSelect(`ROW_NUMBER () OVER (ORDER BY message.id)`, 'index')

      .addSelect('message.uuid', 'uuid')
      .addSelect('message.createdAt', 'createdAt')
      .addSelect('message.updatedAt', 'updatedAt')
      .addSelect('message.deletedAt', 'deletedAt')
      .addSelect('message.active', 'active')

      .addSelect('message.subject', 'subject')

      .addSelect('message.message', 'message')

      .addSelect('receiver.username', 'receiver')

      .addSelect('sender.username', 'sender')

      .from(Message, 'message')

      .leftJoin(User, 'receiver', 'receiver.id = message.receiverId')

      .leftJoin(User, 'sender', 'sender.id = message.senderId');
  },
})
export class MessageView implements IMessage<string, string> {
  @Field()
  @ViewColumn()
  index: string;

  @Field()
  @ViewColumn()
  id: number;

  @Field()
  @ViewColumn()
  uuid: string;

  @Field()
  @ViewColumn()
  subject: string;

  @Field()
  @ViewColumn()
  message: string;

  @Field()
  @ViewColumn()
  receiver: string;

  @Field()
  @ViewColumn()
  sender: string;

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
