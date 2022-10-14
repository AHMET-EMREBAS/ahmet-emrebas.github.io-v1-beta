import { PartialType } from '@nestjs/swagger';

import { PermissionCreateDTO } from './permission.create-dto';

export class PermissionUpdateDTO extends PartialType(PermissionCreateDTO) {}
