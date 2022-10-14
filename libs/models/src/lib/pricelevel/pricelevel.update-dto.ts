import { PartialType } from '@nestjs/swagger';

import { PricelevelCreateDTO } from './pricelevel.create-dto';

export class PricelevelUpdateDTO extends PartialType(PricelevelCreateDTO) {}
