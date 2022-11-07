import {
  Exclude,
  Expose,
} from 'class-transformer';
import {
  IsAlpha,
  IsAlphanumeric,
  IsBoolean,
  IsDate,
  IsEmail,
  IsNegative,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPositive,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import {
  BooleanTransformer,
  FloatTransformer,
  IntTransformer,
  TrimTransformer,
} from 'transformers';
import { IsPassword } from 'validations';

import { applyDecorators } from '@nestjs/common';
import {
  ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';

export type MyAPiPropertyOptions = Partial<
  ApiPropertyOptions &
    Omit<HTMLInputElement, 'max' | 'min' | 'maxLength' | 'minLength'> & {
      max: number;
      min: number;
      minLength: number;
      maxLength: number;
      valueType: string;
      target: string;
      inputType?: string;
      unique?: boolean;
      isEmail?: boolean;
      isPassword?: boolean;
      isUUID?: boolean;
      isPositive?: boolean;
      isNegative?: boolean;
      isAlpha?: boolean;
      isAlphanumeric?: boolean;
      isDate?: boolean;
      isBoolean?: boolean;
      isNumber?: boolean;
      isNumberString?: boolean;
      exclude?: boolean;
      trim?: boolean;
    }
>;

export function Property(o: MyAPiPropertyOptions) {
  const v: PropertyDecorator[] = [];

  if (o.nullable === true) {
    v.push(IsOptional());
    o.required = false;
  } else {
    v.push(IsNotEmpty());
  }

  if (o.exclude === true) {
    v.push(Exclude());
  } else {
    v.push(Expose());
  }

  if (o.minLength) v.push(MinLength(o.minLength));
  if (o.maxLength) v.push(MaxLength(o.maxLength));
  if (o.minimum) v.push(Min(o.minimum));
  if (o.maximum) v.push(Max(o.maximum));
  if (o.isPassword) v.push(IsPassword());
  if (o.isEmail) v.push(IsEmail());
  if (o.isUUID) v.push(IsUUID());
  if (o.isPositive) v.push(IsPositive());
  if (o.isNegative) v.push(IsNegative());
  if (o.isAlpha) v.push(IsAlpha());
  if (o.isDate) v.push(IsDate());
  if (o.isBoolean) v.push(IsBoolean());
  if (o.isAlphanumeric) v.push(IsAlphanumeric());
  if (o.isNumberString) v.push(IsNumberString());

  if (o.trim) v.push(TrimTransformer());

  if (o.type == 'int') v.push(IntTransformer(o.default));
  if (o.type == 'float') v.push(FloatTransformer(o.default));

  if (o.type === 'boolean') v.push(BooleanTransformer(o.default));

  return applyDecorators(ApiProperty({ ...o }), ...v);
}

export function TextProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, type: 'string' });
}

export function ShortTextProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, maxLength: 50, type: 'string' });
}

export function LongTextProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, maxLength: 400, type: 'string' });
}

export function DateProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, isDate: true, type: 'date' });
}

export function NumberProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, isNumber: true, type: 'int' });
}

export function NumberStringProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, isNumberString: true, type: 'int' });
}

export function EmailProperty(o?: MyAPiPropertyOptions) {
  return TextProperty({
    ...o,
    isEmail: true,
    default: 'aemrebas.dev@gmail.com',
  });
}

export function PasswordProperty(o?: MyAPiPropertyOptions) {
  return TextProperty({ ...o, isPassword: true, default: 'aA123!' });
}

export function BooleanProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, type: 'boolean', nullable: true, default: false });
}

export function PositiveIntProperty(o?: MyAPiPropertyOptions) {
  return NumberProperty({ ...o, minimum: 0 });
}

export function NegativeIntProperty(o?: MyAPiPropertyOptions) {
  return NumberProperty({ ...o, maximum: 0 });
}

export function PositiveStringIntProperty(o?: MyAPiPropertyOptions) {
  return NumberStringProperty({
    ...o,
    maxLength: 13,
    minimum: 0,
    trim: true,
  });
}

export function NegativeStringIntProperty(o?: MyAPiPropertyOptions) {
  return NumberStringProperty({ ...o, maxLength: 13, maximum: 0, trim: true });
}
