import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Employee,
  EmployeeView,
} from '../entities';

@Injectable()
export class EmployeeService extends ResourceService<Employee, EmployeeView> {
  constructor(
    @InjectRepository(Employee) repo: Repository<Employee>,
    @InjectRepository(EmployeeView) viewRepo: Repository<EmployeeView>
  ) {
    super(repo, viewRepo);
  }
}
