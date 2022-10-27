import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { PropertyOptions } from './property-options';
import { Validate } from './validation.decorator';

export function Property(options: PropertyOptions) {
  return applyDecorators(ApiProperty(options), Validate(options));
}
