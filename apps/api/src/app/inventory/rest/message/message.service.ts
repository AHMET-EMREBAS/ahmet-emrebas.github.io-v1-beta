import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Message } from './entity';

@Injectable()
export class MessageService extends ResourceService<Message> {
  constructor(@InjectRepository(Message) repo: Repository<Message>) {
    super(repo);
  }
}
