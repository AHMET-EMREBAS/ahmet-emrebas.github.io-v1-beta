import { PartialType } from '@nestjs/swagger';

import { CreateQuantityDto } from './create-quantity.dto';

export class UpdateQuantityDTO extends PartialType(CreateQuantityDto) {}
