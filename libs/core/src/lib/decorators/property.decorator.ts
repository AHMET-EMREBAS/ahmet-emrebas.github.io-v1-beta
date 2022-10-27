import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

import { PropertyOptions } from './property-options';

export function Property(options: PropertyOptions) {
  return applyDecorators(ApiProperty(options));
}
