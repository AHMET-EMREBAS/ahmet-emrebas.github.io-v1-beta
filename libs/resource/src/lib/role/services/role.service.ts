import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  Role,
  RoleView,
} from '../entities';

@Injectable()
export class RoleService extends ResourceService<Role, RoleView> {
  constructor(
    @InjectRepository(Role) repo: Repository<Role>,
    @InjectRepository(RoleView) viewRepo: Repository<RoleView>
  ) {
    super(repo, viewRepo);
  }
}
