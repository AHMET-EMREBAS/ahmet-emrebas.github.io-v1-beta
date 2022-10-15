import { RepositoryService } from 'api-core';
import { PermissionView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionViewService extends RepositoryService<PermissionView> {
  constructor(
    @InjectRepository(PermissionView)
    permissionViewRepository: Repository<PermissionView>
  ) {
    super(permissionViewRepository);
  }
}
