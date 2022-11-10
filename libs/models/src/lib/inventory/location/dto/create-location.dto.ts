import { Property } from 'swagger-property';

export class CreateLocationDto {
  @Property({
    maxLength: 300,
  })
  location: string;

  @Property({
    min: 1,
    max: 9999999999999,
  })
  x: string;

  @Property({
    min: 1,
    max: 9999999999999,
  })
  y: string;

  @Property({
    min: 1,
    max: 9999999999999,
    required: false,
  })
  z: string;
}
