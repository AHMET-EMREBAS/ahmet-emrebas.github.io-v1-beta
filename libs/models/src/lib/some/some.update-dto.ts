import { PartialType } from '@nestjs/swagger';

import { SomeCreateDTO } from './some.create-dto';

export class SomeUpdateDTO extends PartialType(SomeCreateDTO) {}
