import { GetQueryController, ManagePermission } from 'core';
import { User, UserView } from 'models/inventory/user';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserNames } from './user.names';
import { UserService } from './user.service';

@ApiTags('[ Query / Relation ] User')
@ManagePermission(UserNames.SINGULAR_NAME)
@Controller(UserNames.SINGULAR_NAME)
export class UserQueryController extends GetQueryController<User, UserView>(
  UserNames.SINGULAR_NAME
) {
  constructor(service: UserService) {
    super(service);
  }
}
