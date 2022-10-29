import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Department,
  DepartmentView,
} from '../entities';

@Injectable()
export class DepartmentService extends ResourceService<Department, DepartmentView> {
  constructor(
    @InjectRepository(Department) repo: Repository<Department>,
    @InjectRepository(DepartmentView) viewRepo: Repository<DepartmentView>
  ) {
    super(repo, viewRepo);
  }
}
