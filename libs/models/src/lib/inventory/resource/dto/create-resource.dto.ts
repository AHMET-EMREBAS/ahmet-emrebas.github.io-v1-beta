import { Property } from 'swagger-property';

export class CreateResourceDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  name: string;
}
