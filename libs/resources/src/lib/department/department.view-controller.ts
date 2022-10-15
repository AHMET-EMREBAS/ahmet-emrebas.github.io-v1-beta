import { QueryController } from 'api-core';
import { DepartmentView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DepartmentViewService } from './department.view-service';

@ApiTags(DepartmentViewController.name)
@Controller()
export class DepartmentViewController extends QueryController<DepartmentView>({
  entity: DepartmentView,
  singularName: 'viewdepartment',
  pluralName: 'viewdepartments',
}) {
  constructor(service: DepartmentViewService) {
    super(service);
  }
}
