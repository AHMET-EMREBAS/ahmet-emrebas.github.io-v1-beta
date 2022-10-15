import { RepositoryService } from 'api-core';
import { DepartmentView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentViewService extends RepositoryService<DepartmentView> {
  constructor(
    @InjectRepository(DepartmentView)
    departmentViewRepository: Repository<DepartmentView>
  ) {
    super(departmentViewRepository);
  }
}
