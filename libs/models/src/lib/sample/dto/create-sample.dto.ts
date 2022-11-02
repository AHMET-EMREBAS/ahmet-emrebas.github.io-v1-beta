import { ShortTextProperty } from 'swagger-property';

export class CreateSampleDto {
  @ShortTextProperty({ nullable: false })
  name: string;
}
