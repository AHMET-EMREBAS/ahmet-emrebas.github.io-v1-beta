import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { DepartmentView } from 'models/inventory/department';

@Injectable()
export class DepartmentViewService extends ResourceViewService<DepartmentView> {
  constructor(
    @InjectRepository(DepartmentView) repo: Repository<DepartmentView>
  ) {
    super(repo);
  }
}
