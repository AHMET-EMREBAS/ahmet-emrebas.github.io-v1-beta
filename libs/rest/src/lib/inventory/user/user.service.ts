import { CrudService } from 'core';
import { User, UserView } from 'models/inventory/user';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends CrudService<User, UserView> {
  constructor(
    @InjectRepository(User) mainRepo: Repository<User>,
    @InjectRepository(UserView) viewRepo: Repository<UserView>
  ) {
    super(mainRepo, viewRepo);
  }
}
