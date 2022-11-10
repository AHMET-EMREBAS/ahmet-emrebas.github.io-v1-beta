import { Property } from 'swagger-property';

export class CreatePermissionDto {
  @Property({})
  permission: string;

  @Property({})
  operation: string;

  @Property({
    isNumber: true,
  })
  resource: number;
}
