import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Permission,
  PermissionView,
} from '../entities';

@Injectable()
export class PermissionService extends ResourceService<Permission, PermissionView> {
  constructor(
    @InjectRepository(Permission) repo: Repository<Permission>,
    @InjectRepository(PermissionView) viewRepo: Repository<PermissionView>
  ) {
    super(repo, viewRepo);
  }
}
