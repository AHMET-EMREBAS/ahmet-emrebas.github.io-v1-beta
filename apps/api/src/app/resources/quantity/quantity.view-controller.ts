import { QueryController } from 'api-core';
import { QuantityView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QuantityViewService } from './quantity.view-service';

@ApiTags(QuantityViewController.name)
@Controller()
export class QuantityViewController extends QueryController<QuantityView>({
  entity: QuantityView,
  singularName: 'viewquantity',
  pluralName: 'viewquantitys',
}) {
  constructor(service: QuantityViewService) {
    super(service);
  }
}
