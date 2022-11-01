import { ShortTextProperty } from 'swagger-property';

export class CreateDepartmentDto {
  @ShortTextProperty({ nullable: false })
  name: string;
}
