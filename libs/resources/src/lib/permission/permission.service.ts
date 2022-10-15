import { RepositoryService } from 'api-core';
import { Permission } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PermissionService extends RepositoryService<Permission> {
  constructor(
    @InjectRepository(Permission) permissionRepository: Repository<Permission>
  ) {
    super(permissionRepository);
  }
}
