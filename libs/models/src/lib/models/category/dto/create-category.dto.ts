import { ShortTextProperty } from 'swagger-property';

export class CreateCategoryDto {
  @ShortTextProperty({ nullable: false })
  name: string;
}
