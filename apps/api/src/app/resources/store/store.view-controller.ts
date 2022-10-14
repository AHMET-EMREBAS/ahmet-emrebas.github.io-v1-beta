import { QueryController } from 'api-core';
import { StoreView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StoreViewService } from './store.view-service';

@ApiTags(StoreViewController.name)
@Controller()
export class StoreViewController extends QueryController<StoreView>({
  entity: StoreView,
  singularName: 'viewstore',
  pluralName: 'viewstores',
}) {
  constructor(service: StoreViewService) {
    super(service);
  }
}
