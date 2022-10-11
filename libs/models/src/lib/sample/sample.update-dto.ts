import { PartialType } from '@nestjs/swagger';

import { SampleCreateDTO } from './sample.create-dto';

export class SampleUpdateDTO extends PartialType(SampleCreateDTO) {}
