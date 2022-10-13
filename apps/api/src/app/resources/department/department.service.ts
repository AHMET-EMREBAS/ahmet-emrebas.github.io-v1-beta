import { RepositoryService } from 'api-core';
import { Department } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DepartmentService extends RepositoryService<Department> {
  constructor(
    @InjectRepository(Department) departmentRepository: Repository<Department>
  ) {
    super(departmentRepository);
  }
}
