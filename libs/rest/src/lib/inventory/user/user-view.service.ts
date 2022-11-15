import { ResourceViewService } from 'core/service';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserView } from 'models/inventory/user';

@Injectable()
export class UserViewService extends ResourceViewService<UserView> {
  constructor(@InjectRepository(UserView) repo: Repository<UserView>) {
    super(repo);
  }
}
