import {
  InputType,
  PartialType,
} from '@nestjs/graphql';

import { CreateSampleDto } from './create-sample.dto';

@InputType()
export class UpdateSampleDto extends PartialType(CreateSampleDto) {}
