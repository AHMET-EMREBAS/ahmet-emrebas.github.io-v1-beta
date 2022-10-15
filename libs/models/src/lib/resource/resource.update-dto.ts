import { PartialType } from '@nestjs/swagger';

import { ResourceCreateDTO } from './resource.create-dto';

export class ResourceUpdateDTO extends PartialType(ResourceCreateDTO) {}
