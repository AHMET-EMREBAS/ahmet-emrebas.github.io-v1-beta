import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

import { applyDecorators } from '@nestjs/common';
import {
  ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';

const specialChars = /[!@#$%^&*()_+-=[]{};':",.<>`~]{1,}/;

const validatorsMap = {
  required: (value: boolean) => (value === false ? IsOptional() : IsNotEmpty()),
  minLength: (value: number) => MinLength(value),
  maxLength: (value: number) => MaxLength(value),
  password: () =>
    applyDecorators(
      Matches(/[A-Z]{1, }/, {
        message: '$property should contain an uppercase letter!',
      }),
      Matches(/[a-z]{1, }/, {
        message: '$property should contain a lowercase letter!',
      }),
      Matches(/[0-9]{1, }/, { message: '$property should contain a number!' }),
      Matches(specialChars, {
        message: '$property should contain a special character!',
      })
    ),
  isEmail: () => IsEmail(),
  isBarcode: () =>
    Matches(/[0-9]{11,13}/, {
      message: '$property should contain 11 to 13 numbers!',
    }),
};

/**
 * Describe the entity property
 * @param options ApiPropertyOptions & HtmlInputElement Options
 * @returns
 */
export function Property(
  options: Partial<
    | ApiPropertyOptions
    | HTMLInputElement
    | {
        /**
         * IS input email
         */
        isEmail: boolean;
        /**
         * Is input barcode
         */
        isBarcode?: boolean;

        selectOptions?: { id: number; name: string }[];

        enum?: string[];

        /**
         * For range input
         */
        start?: any;

        /**
         * For range input
         */
        end?: any;

        /**
         * UI Input Type
         */
        inputType?: string;
      }
  >
) {
  const validators = [];

  /**
   * Adding validators
   */
  for (const [key, value] of Object.entries(options)) {
    if (validatorsMap[key]) {
      validators.push(validatorsMap[key](value));
    }
  }

  return applyDecorators(ApiProperty(...(options as any)), ...validators);
}
