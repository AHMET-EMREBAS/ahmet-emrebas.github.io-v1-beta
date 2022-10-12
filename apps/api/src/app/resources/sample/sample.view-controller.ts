import { QueryController } from 'api-core';
import { SampleView } from 'models';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SampleViewService } from './sample.view-service';

@ApiTags(SampleViewController.name)
@Controller()
export class SampleViewController extends QueryController<SampleView>({
  entity: SampleView,
  singularName: 'viewsample',
  pluralName: 'viewsamples',
}) {
  constructor(service: SampleViewService) {
    super(service);
  }
}
