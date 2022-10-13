import { CrudController } from 'api-core';
import { Department, DepartmentCreateDTO, DepartmentUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { DepartmentService } from './department.service';

@ApiTags(DepartmentController.name)
@Controller()
export class DepartmentController extends CrudController<Department>({
  entity: Department,
  createDTO: DepartmentCreateDTO,
  updateDTO: DepartmentUpdateDTO,
  singularName: 'department',
  pluralName: 'departments',
}) {
  constructor(service: DepartmentService) {
    super(service);
  }
}
