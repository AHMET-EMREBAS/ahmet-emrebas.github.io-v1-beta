import { PartialType } from '@nestjs/swagger';

import { Create } from './create';

export class Update extends PartialType(Create) {}
