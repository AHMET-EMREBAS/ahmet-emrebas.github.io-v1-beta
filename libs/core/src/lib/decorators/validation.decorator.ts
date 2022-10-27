import * as validators from 'class-validator';
import { upperFirst } from 'lodash';

import { applyDecorators } from '@nestjs/common';

import { ValidationOptions } from './validation-options';

export function Validate(options: ValidationOptions) {
  const decorators = [];

  for (const [key, value] of Object.entries(options)) {
    const vn = upperFirst(key);

    if (validators[vn]) {
      decorators.push(validators[vn](value));
    }
  }
  return applyDecorators(...decorators);
}
