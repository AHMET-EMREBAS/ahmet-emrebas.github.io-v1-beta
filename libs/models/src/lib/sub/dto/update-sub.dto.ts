import { PartialType } from '@nestjs/swagger';

import { CreateSubDto } from './create-sub.dto';

export class UpdateSubDTO extends PartialType(CreateSubDto) {}
