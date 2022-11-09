import { Property } from 'swagger-property';

export class CreateProductDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  name: string;

  @Property({
    minLength: 3,
    maxLength: 50,
  })
  description: string;

  @Property({
    minLength: 3,
    maxLength: 50,
  })
  code: string;

  @Property({
    required: false,
    isNumber: true,
  })
  category: number;

  @Property({
    required: false,
    isNumber: true,
  })
  department: number;

  @Property({
    required: false,
    isNumberArray: true,
  })
  variants: number[];
}
