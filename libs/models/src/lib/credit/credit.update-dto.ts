import { PartialType } from '@nestjs/swagger';

import { CreditCreateDTO } from './credit.create-dto';

export class CreditUpdateDTO extends PartialType(CreditCreateDTO) {}
