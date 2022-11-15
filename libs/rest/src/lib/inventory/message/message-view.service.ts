import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { MessageView } from 'models/inventory/message';

@Injectable()
export class MessageViewService extends ResourceViewService<MessageView> {
  constructor(@InjectRepository(MessageView) repo: Repository<MessageView>) {
    super(repo);
  }
}
