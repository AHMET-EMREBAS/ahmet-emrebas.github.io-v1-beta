import {
  Matches,
  MinLength,
} from 'class-validator';

import { applyDecorators } from '@nestjs/common';

/**
 * Password error Messages
 */
export enum PEM {
  UPPERCASE = 'Password must have a uppercase letter.',
  LOWERCASE = 'Password must have a lowercase letter.',
  NUMBER = 'Password must have a number letter.',
  SPECIAL = 'Password must have a special character.',
}

export function IsPassword() {
  return applyDecorators(
    MinLength(6),
    Matches(/[A-Z]{1,}/, { message: PEM.UPPERCASE }),
    Matches(/[a-z]{1,}/, { message: PEM.LOWERCASE }),
    Matches(/[0-9]{1,}/, { message: PEM.NUMBER }),
    Matches(/[!@#$%^&*^&()_+-=.,<>/?\[\]\{\}]{1,}/, {
      message: PEM.SPECIAL,
    })
  );
}
