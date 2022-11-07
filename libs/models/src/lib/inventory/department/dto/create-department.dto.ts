import { Property } from 'swagger-property';

export class CreateDepartmentDto {
  @Property({
    name: 'name',

    id: 'department-name-input',

    type: 'string',

    valueType: 'string',

    inputType: 'text-input',

    minLength: 3,

    maxLength: 10,

    required: true,

    unique: true,
  })
  name: string;
}
