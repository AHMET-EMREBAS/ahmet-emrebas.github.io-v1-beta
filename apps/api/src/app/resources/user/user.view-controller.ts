import { QueryController } from 'api-core';
import { UserView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserViewService } from './user.view-service';

@ApiTags(UserViewController.name)
@Controller()
export class UserViewController extends QueryController<UserView>({
  entity: UserView,
  singularName: 'viewuser',
  pluralName: 'viewusers',
}) {
  constructor(service: UserViewService) {
    super(service);
  }
}
