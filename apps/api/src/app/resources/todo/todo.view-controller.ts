import { QueryController } from 'api-core';
import { TodoView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TodoViewService } from './todo.view-service';

@ApiTags(TodoViewController.name)
@Controller()
export class TodoViewController extends QueryController<TodoView>({
  entity: TodoView,
  singularName: 'viewtodo',
  pluralName: 'viewtodos',
}) {
  constructor(service: TodoViewService) {
    super(service);
  }
}
