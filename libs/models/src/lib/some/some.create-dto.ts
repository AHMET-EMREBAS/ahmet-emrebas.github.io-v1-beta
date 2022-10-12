import {
  BaseDTO,
  Property,
} from 'api-core';

export class SomeCreateDTO extends BaseDTO<SomeCreateDTO> {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
