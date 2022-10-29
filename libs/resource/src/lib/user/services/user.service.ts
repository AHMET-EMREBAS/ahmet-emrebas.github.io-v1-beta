import { ResourceService } from 'core';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  User,
  UserView,
} from '../entities';

@Injectable()
export class UserService extends ResourceService<User, UserView> {
  constructor(
    @InjectRepository(User) repo: Repository<User>,
    @InjectRepository(UserView) viewRepo: Repository<UserView>
  ) {
    super(repo, viewRepo);
  }
}
