import { QueryController } from 'api-core';
import { PriceView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PriceViewService } from './price.view-service';

@ApiTags(PriceViewController.name)
@Controller()
export class PriceViewController extends QueryController<PriceView>({
  entity: PriceView,
  singularName: 'viewprice',
  pluralName: 'viewprices',
}) {
  constructor(service: PriceViewService) {
    super(service);
  }
}
