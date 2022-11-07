import { GetPostController, ManagePermission } from 'core';
import {
  CreateDepartmentDto,
  UpdateDepartmentDTO,
} from 'models/inventory/department';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DepartmentNames } from './department.names';
import { DepartmentService } from './department.service';

@ApiTags('[ Post / Update ] Department')
@ManagePermission(DepartmentNames.SINGULAR_NAME)
@Controller(DepartmentNames.SINGULAR_NAME)
export class DepartmentPostController extends GetPostController(
  DepartmentNames.SINGULAR_NAME,
  CreateDepartmentDto,
  UpdateDepartmentDTO
) {
  constructor(private readonly service: DepartmentService) {
    super(service);
  }
}
