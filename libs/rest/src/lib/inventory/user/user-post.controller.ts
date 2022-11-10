import { GetPostController, ManagePermission } from 'core';
import { CreateUserDto, UpdateUserDTO } from 'models/inventory/user';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserNames } from './user.names';
import { UserService } from './user.service';

@ApiTags('[ Post / Update ] User')
@ManagePermission(UserNames.SINGULAR_NAME)
@Controller(UserNames.SINGULAR_NAME)
export class UserPostController extends GetPostController(
  UserNames.SINGULAR_NAME,
  CreateUserDto,
  UpdateUserDTO
) {
  constructor(private readonly service: UserService) {
    super(service);
  }
}
