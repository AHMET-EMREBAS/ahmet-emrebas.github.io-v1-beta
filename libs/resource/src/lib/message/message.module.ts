import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  MessageController,
  MessageOwnController,
} from './controllers';
import {
  Message,
  MessageSubscriber,
  MessageView,
} from './entities';
import { MessageService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([Message, MessageView])],
  controllers: [MessageController, MessageOwnController],
  providers: [MessageService, MessageSubscriber],
  exports: [MessageService],
})
export class MessageModule {}
