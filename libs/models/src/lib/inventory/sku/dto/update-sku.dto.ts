import { PartialType } from '@nestjs/swagger';

import { CreateSkuDto } from './create-sku.dto';

export class UpdateSkuDTO extends PartialType(CreateSkuDto) {}
