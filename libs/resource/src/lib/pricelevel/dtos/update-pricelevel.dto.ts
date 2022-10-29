import { PartialType } from '@nestjs/swagger';

import { CreatePricelevelDto } from './create-pricelevel.dto';

export class UpdatePricelevelDto extends PartialType(CreatePricelevelDto) {}
