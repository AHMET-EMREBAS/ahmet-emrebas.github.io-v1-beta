import { GetPostController, ManagePermission } from 'core';
import {
  CreatePermissionDto,
  UpdatePermissionDTO,
} from 'models/inventory/permission';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PermissionNames } from './permission.names';
import { PermissionService } from './permission.service';

@ApiTags('[ Post / Update ] Permission')
@ManagePermission(PermissionNames.SINGULAR_NAME)
@Controller(PermissionNames.SINGULAR_NAME)
export class PermissionPostController extends GetPostController(
  PermissionNames.SINGULAR_NAME,
  CreatePermissionDto,
  UpdatePermissionDTO
) {
  constructor(private readonly service: PermissionService) {
    super(service);
  }
}
