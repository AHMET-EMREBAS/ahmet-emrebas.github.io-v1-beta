import { Property } from 'swagger-property';

export class CreatePricelevelDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  pricelevel: string;
}
