import { PartialType } from '@nestjs/swagger';

import { CreateResourceDto } from './create-resource.dto';

export class UpdateResourceDTO extends PartialType(CreateResourceDto) {}
