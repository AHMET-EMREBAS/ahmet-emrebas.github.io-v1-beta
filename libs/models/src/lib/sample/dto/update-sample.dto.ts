import { PartialType } from '@nestjs/swagger';

import { CreateSampleDto } from './create-sample.dto';

export class UpdateSampleDTO extends PartialType(CreateSampleDto) {}
