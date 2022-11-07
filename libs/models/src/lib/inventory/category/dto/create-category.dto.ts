import { Property } from 'swagger-property';

export class CreateCategoryDto {
  @Property({
    name: 'name',

    id: 'category-name-input',

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
