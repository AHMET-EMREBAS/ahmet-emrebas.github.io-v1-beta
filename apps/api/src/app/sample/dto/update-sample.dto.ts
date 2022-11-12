import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/swagger';

import { CreateSampleDto } from './create-sample.dto';

@InputType()
export class UpdateSampleDto extends PartialType(CreateSampleDto) {}
