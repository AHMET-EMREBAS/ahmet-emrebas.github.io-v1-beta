import { CrudService } from 'core';
import { Department, DepartmentView } from 'models/inventory/department';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentService extends CrudService<Department, DepartmentView> {
  constructor(
    @InjectRepository(Department) mainRepo: Repository<Department>,
    @InjectRepository(DepartmentView) viewRepo: Repository<DepartmentView>
  ) {
    super(mainRepo, viewRepo);
  }
}
