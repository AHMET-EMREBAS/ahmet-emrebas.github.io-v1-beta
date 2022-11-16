import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PermissionView } from '../../models/permission';

@Injectable()
export class PermissionViewService extends ResourceViewService<PermissionView> {
  constructor(
    @InjectRepository(PermissionView) repo: Repository<PermissionView>
  ) {
    super(repo);
  }
}
