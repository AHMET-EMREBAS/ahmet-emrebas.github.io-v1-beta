import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  Matches,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { applyDecorators } from '@nestjs/common/decorators';
import {
  ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';

export type PropertyOptions = Partial<ApiPropertyOptions | HTMLInputElement> & {
  unique?: boolean;
  update?: boolean;
  min?: number;
  max?: number;
  email?: boolean;
  password?: boolean;
  inputType:
    | 'text'
    | 'number'
    | 'date'
    | 'date-range'
    | 'number-range'
    | 'text-editor'
    | 'textarea'
    | 'select-one'
    | 'select-many'
    | 'select-one-enum'
    | 'select-many-enum'
    | 'checkbox'
    | 'switch'
    | 'select-radio'
    | 'email'
    | 'password'
    | 'permissions';

  enum?: string[];

  /**
   * Which entity is selected?
   */
  selectFrom?: string;

  /**
   * property of the entity shown on the select input options as label
   */
  selectLabelProperty?: string;

  /**
   * property of the entity  used as value of the select input.
   */
  selectValueProperty?: string;
};

const propertyValidators = {
  min: (value: number) => Min(value),

  max: (value: number) => Max(value),
  minLength: (value: number) => MinLength(value),
  maxLength: (value: number) => MaxLength(value),
  email: () => IsEmail(),
  password: () =>
    applyDecorators(
      Matches(/[A-Z]{1,}/, {
        message: 'Must contains at least an uppercase letter.',
      }),
      Matches(/[a-z]{1,}/, {
        message: 'Must contains at least a lowercase letter.',
      }),
      Matches(/[0-9]{1,}/, { message: 'Must contains at least a number.' }),
      Matches(/[!@#$%^&*()-=[]{};':",.<>\?]{1,}/, {
        message: 'Must contains at least a special character.',
      }),
      MinLength(6),
      MaxLength(50)
    ),
};

export function Property(options: PropertyOptions) {
  const validators = [];

  const entires = Object.entries(options);

  entires.forEach(([key, value]) => {
    const vvalidator = propertyValidators[key];
    if (vvalidator) {
      validators.push(vvalidator(value));
    }
  });

  if (options.required === false) {
    validators.push(IsOptional());
  } else {
    validators.push(IsNotEmpty());
  }

  return applyDecorators(ApiProperty(options as any), ...validators);
}
