import { ResourceService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Permission } from './entity';

@Injectable()
export class PermissionService extends ResourceService<Permission> {
  constructor(@InjectRepository(Permission) repo: Repository<Permission>) {
    super(repo);
  }
}
