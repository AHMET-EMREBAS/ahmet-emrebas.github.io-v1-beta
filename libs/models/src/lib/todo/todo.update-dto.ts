import { PartialType } from '@nestjs/swagger';

import { TodoCreateDTO } from './todo.create-dto';

export class TodoUpdateDTO extends PartialType(TodoCreateDTO) {}
