import {
  PartialType,
  PickType,
} from '@nestjs/swagger';

import { CreateSubDTO } from './create-sub.dto';

export class UpdateSubDto extends PartialType(
  PickType(CreateSubDTO, ['password', 'permission'])
) {}
