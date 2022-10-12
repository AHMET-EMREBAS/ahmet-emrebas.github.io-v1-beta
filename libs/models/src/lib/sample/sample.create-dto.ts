import { Property } from 'libs/api-core/src/lib/property.decorator';

export class SampleCreateDTO {
  @Property({
    minLength: 3,
    maxLength: 20,
  })
  name: string;
}
