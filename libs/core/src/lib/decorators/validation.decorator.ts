import * as validators from 'class-validator';
import { ValidatorOptions } from 'class-validator';
import { upperFirst } from 'lodash';

import { applyDecorators } from '@nestjs/common';

export function Validate(options: ValidatorOptions) {
  const decorators = [];

  for (const [key, value] of Object.entries(options)) {
    const vn = upperFirst(key);

    if (validators[vn]) {
      validators[vn](value);
    }
  }
  return applyDecorators(...decorators);
}
