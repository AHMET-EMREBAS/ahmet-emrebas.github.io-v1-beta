import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Message, MessageView } from 'models/inventory/message';

import { MessageViewService } from './message-view.service';
import { MessageController } from './message.controller';
import { MessageResolver } from './message.resolver';
import { MessageService } from './message.service';
import { MessageSubscriber } from './message.subscriber';

@Module({
  controllers: [MessageController],
  imports: [TypeOrmModule.forFeature([Message, MessageView])],
  providers: [
    MessageResolver,
    MessageService,
    MessageViewService,
    MessageSubscriber,
  ],
})
export class MessageModule {}
