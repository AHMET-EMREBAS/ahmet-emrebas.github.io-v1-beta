import { PickType } from '@nestjs/swagger';

import { CreateSubDTO } from './create-sub.dto';

export class UpdateSubDto extends PickType(CreateSubDTO, ['password']) {}
