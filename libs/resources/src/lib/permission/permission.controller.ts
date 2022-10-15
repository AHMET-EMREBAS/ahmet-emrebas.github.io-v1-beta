import { CrudController } from 'api-core';
import { Permission, PermissionCreateDTO, PermissionUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PermissionService } from './permission.service';

@ApiTags(PermissionController.name)
@Controller()
export class PermissionController extends CrudController<Permission>({
  entity: Permission,
  createDTO: PermissionCreateDTO,
  updateDTO: PermissionUpdateDTO,
  singularName: 'permission',
  pluralName: 'permissions',
}) {
  constructor(service: PermissionService) {
    super(service);
  }
}
