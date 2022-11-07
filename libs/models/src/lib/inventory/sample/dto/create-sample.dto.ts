import { Property } from 'swagger-property';

export class CreateSampleDto {
  @Property({
    name: 'name',

    type: 'string',

    valueType: 'string',

    minLength: 3,

    maxLength: 10,

    required: true,

    unique: true,
  })
  name: string;
}
