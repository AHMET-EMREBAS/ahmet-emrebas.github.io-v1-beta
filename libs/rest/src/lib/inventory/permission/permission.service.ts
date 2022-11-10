import { CrudService } from 'core';
import { Permission, PermissionView } from 'models/inventory/permission';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionService extends CrudService<Permission, PermissionView> {
  constructor(
    @InjectRepository(Permission) mainRepo: Repository<Permission>,
    @InjectRepository(PermissionView) viewRepo: Repository<PermissionView>
  ) {
    super(mainRepo, viewRepo);
  }
}
