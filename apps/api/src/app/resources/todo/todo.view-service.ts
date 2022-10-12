import { RepositoryService } from 'api-core';
import { TodoView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoViewService extends RepositoryService<TodoView> {
  constructor(
    @InjectRepository(TodoView) todoViewRepository: Repository<TodoView>
  ) {
    super(todoViewRepository);
  }
}
