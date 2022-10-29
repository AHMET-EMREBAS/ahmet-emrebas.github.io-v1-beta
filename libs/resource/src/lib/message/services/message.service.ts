import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Message,
  MessageView,
} from '../entities';

@Injectable()
export class MessageService extends ResourceService<Message, MessageView> {
  constructor(
    @InjectRepository(Message) repo: Repository<Message>,
    @InjectRepository(MessageView) viewRepo: Repository<MessageView>
  ) {
    super(repo, viewRepo);
  }
}
