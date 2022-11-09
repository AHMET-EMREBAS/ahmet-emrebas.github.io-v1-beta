import { PartialType } from '@nestjs/swagger';

import { CreatePricelevelDto } from './create-pricelevel.dto';

export class UpdatePricelevelDTO extends PartialType(CreatePricelevelDto) {}
