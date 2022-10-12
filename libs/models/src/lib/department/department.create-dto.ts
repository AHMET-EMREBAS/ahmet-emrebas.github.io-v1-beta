import { BaseDTO, Property } from 'api-core';

export class DepartmentCreateDTO extends BaseDTO<DepartmentCreateDTO> {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
