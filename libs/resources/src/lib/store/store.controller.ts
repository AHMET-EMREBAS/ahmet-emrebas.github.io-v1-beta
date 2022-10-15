import { CrudController } from 'api-core';
import { Store, StoreCreateDTO, StoreUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { StoreService } from './store.service';

@ApiTags(StoreController.name)
@Controller()
export class StoreController extends CrudController<Store>({
  entity: Store,
  createDTO: StoreCreateDTO,
  updateDTO: StoreUpdateDTO,
  singularName: 'store',
  pluralName: 'stores',
}) {
  constructor(service: StoreService) {
    super(service);
  }
}
