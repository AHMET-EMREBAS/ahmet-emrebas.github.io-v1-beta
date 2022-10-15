import { RepositoryService } from 'api-core';
import { UserView } from 'models';
import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserViewService extends RepositoryService<UserView> {
  constructor(
    @InjectRepository(UserView) userViewRepository: Repository<UserView>
  ) {
    super(userViewRepository);
  }
}
