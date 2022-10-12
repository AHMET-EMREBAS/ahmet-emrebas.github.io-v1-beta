import { RepositoryService } from 'api-core';
import { Todo } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService extends RepositoryService<Todo> {
  constructor(@InjectRepository(Todo) todoRepository: Repository<Todo>) {
    super(todoRepository);
  }
}
