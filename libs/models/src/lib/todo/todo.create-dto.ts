import { BaseDTO, Property } from 'api-core';

export class TodoCreateDTO extends BaseDTO<TodoCreateDTO> {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
