import { CrudController } from 'api-core';
import { Todo, TodoCreateDTO, TodoUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { TodoService } from './todo.service';

@ApiTags(TodoController.name)
@Controller()
export class TodoController extends CrudController<Todo>({
  entity: Todo,
  createDTO: TodoCreateDTO,
  updateDTO: TodoUpdateDTO,
  singularName: 'todo',
  pluralName: 'todos',
}) {
  constructor(service: TodoService) {
    super(service);
  }
}
