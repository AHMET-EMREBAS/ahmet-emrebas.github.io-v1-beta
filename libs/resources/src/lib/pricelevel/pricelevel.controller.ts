import { CrudController } from 'api-core';
import { Pricelevel, PricelevelCreateDTO, PricelevelUpdateDTO } from 'models';

import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { PricelevelService } from './pricelevel.service';

@ApiTags(PricelevelController.name)
@Controller()
export class PricelevelController extends CrudController<Pricelevel>({
  entity: Pricelevel,
  createDTO: PricelevelCreateDTO,
  updateDTO: PricelevelUpdateDTO,
  singularName: 'pricelevel',
  pluralName: 'pricelevels',
}) {
  constructor(service: PricelevelService) {
    super(service);
  }
}
