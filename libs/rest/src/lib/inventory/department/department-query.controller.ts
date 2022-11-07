import { GetQueryController, ManagePermission } from 'core';
import { Department, DepartmentView } from 'models/inventory/department';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DepartmentNames } from './department.names';
import { DepartmentService } from './department.service';

@ApiTags('[ Query / Relation ] Department')
@ManagePermission(DepartmentNames.SINGULAR_NAME)
@Controller(DepartmentNames.SINGULAR_NAME)
export class DepartmentQueryController extends GetQueryController<
  Department,
  DepartmentView
>(DepartmentNames.SINGULAR_NAME) {
  constructor(service: DepartmentService) {
    super(service);
  }
}
