import { Property } from 'swagger-property';

export class CreateVariantDto {
  @Property({
    minLength: 3,
    maxLength: 400,
  })
  value: string;

  @Property({
    maxLength: 4,
    minLength: 1,
  })
  code: string;

  @Property({
    isNumber: true,
  })
  feature: number;
}
