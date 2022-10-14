import { PartialType } from '@nestjs/swagger';

import { QuantityCreateDTO } from './quantity.create-dto';

export class QuantityUpdateDTO extends PartialType(QuantityCreateDTO) {}
