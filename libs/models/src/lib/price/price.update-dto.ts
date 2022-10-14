import { PartialType } from '@nestjs/swagger';

import { PriceCreateDTO } from './price.create-dto';

export class PriceUpdateDTO extends PartialType(PriceCreateDTO) {}
