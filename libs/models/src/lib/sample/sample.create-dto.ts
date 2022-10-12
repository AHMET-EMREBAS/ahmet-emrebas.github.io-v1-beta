import { Property } from 'api-core';

export class SampleCreateDTO {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
