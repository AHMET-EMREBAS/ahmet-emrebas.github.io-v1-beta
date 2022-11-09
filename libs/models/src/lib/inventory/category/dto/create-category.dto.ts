import { Property } from 'swagger-property';

export class CreateCategoryDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  category: string;
}
