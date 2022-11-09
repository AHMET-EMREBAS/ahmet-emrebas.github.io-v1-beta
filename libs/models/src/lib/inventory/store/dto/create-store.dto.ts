import { Property } from 'swagger-property';

export class CreateStoreDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  name: string;
}
