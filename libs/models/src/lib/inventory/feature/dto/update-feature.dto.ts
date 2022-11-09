import { PartialType } from '@nestjs/swagger';

import { CreateFeatureDto } from './create-feature.dto';

export class UpdateFeatureDTO extends PartialType(CreateFeatureDto) {}
