import { PartialType } from '@nestjs/swagger';

import { CreateLocationDto } from './create-location.dto';

export class UpdateLocationDTO extends PartialType(CreateLocationDto) {}
