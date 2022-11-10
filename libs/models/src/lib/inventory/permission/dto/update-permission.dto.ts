import { PartialType } from '@nestjs/swagger';

import { CreatePermissionDto } from './create-permission.dto';

export class UpdatePermissionDTO extends PartialType(CreatePermissionDto) {}
