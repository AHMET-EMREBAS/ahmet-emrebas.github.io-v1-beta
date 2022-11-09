import { Property } from 'swagger-property';

export class CreateFeatureDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  feature: string;
}
