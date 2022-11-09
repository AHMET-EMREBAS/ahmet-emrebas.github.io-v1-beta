import { PartialType } from '@nestjs/swagger';

import { CreateVariantDto } from './create-variant.dto';

export class UpdateVariantDTO extends PartialType(CreateVariantDto) {}
