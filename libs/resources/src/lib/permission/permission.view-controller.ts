import { QueryController } from 'api-core';
import { PermissionView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionViewService } from './permission.view-service';

@ApiTags(PermissionViewController.name)
@Controller()
export class PermissionViewController extends QueryController<PermissionView>({
  entity: PermissionView,
  singularName: 'viewpermission',
  pluralName: 'viewpermissions',
}) {
  constructor(service: PermissionViewService) {
    super(service);
  }
}
