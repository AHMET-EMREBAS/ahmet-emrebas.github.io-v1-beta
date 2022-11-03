import { Property } from 'swagger-property';

export class CreateSampleDto {
  @Property({
    name: 'name',

    type: 'string',

    minLength: 3,

    maxLength: 10,

    required: true,

    unique: true,
  })
  name: string;

  @Property({
    name: 'description',

    type: 'string',

    minLength: 3,

    maxLength: 400,

    required: true,
  })
  description: string;

  @Property({
    type: 'number',
    inputType: 'select',
    target: 'sub',
  })
  sub: number;
}
