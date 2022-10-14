import { CrudController } from 'api-core';
import { User, UserCreateDTO, UserUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';

@ApiTags(UserController.name)
@Controller()
export class UserController extends CrudController<User>({
  entity: User,
  createDTO: UserCreateDTO,
  updateDTO: UserUpdateDTO,
  singularName: 'user',
  pluralName: 'users',
}) {
  constructor(service: UserService) {
    super(service);
  }
}
