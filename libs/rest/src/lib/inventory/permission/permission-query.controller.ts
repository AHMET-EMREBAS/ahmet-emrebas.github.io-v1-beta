import { GetQueryController, ManagePermission } from 'core';
import { Permission, PermissionView } from 'models/inventory/permission';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PermissionNames } from './permission.names';
import { PermissionService } from './permission.service';

@ApiTags('[ Query / Relation ] Permission')
@ManagePermission(PermissionNames.SINGULAR_NAME)
@Controller(PermissionNames.SINGULAR_NAME)
export class PermissionQueryController extends GetQueryController<
  Permission,
  PermissionView
>(PermissionNames.SINGULAR_NAME) {
  constructor(service: PermissionService) {
    super(service);
  }
}
