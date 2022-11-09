import { Property } from 'swagger-property';

export class CreateDepartmentDto {
  @Property({
    minLength: 3,
    maxLength: 50,
  })
  department: string;
}
