import { BaseDTO, Property } from 'api-core';

export class DepartmentCreateDTO extends BaseDTO<DepartmentCreateDTO> {
  @Property({
    name: 'name',
    valueType: 'string',
    type: 'text',
    unique: true,
    minLength: 3,
  })
  name: string;
}
