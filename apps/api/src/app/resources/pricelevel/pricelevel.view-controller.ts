import { QueryController } from 'api-core';
import { PricelevelView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PricelevelViewService } from './pricelevel.view-service';

@ApiTags(PricelevelViewController.name)
@Controller()
export class PricelevelViewController extends QueryController<PricelevelView>({
  entity: PricelevelView,
  singularName: 'viewpricelevel',
  pluralName: 'viewpricelevels',
}) {
  constructor(service: PricelevelViewService) {
    super(service);
  }
}
