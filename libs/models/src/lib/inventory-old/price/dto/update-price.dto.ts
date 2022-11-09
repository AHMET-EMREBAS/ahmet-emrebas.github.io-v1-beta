import { PartialType } from '@nestjs/swagger';

import { CreatePriceDto } from './create-price.dto';

export class UpdatePriceDTO extends PartialType(CreatePriceDto) {}
