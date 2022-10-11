import { Property } from 'dtos';

export class SampleCreateDTO {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
