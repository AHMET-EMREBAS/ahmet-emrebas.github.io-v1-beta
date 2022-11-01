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
import { IsPassword } from 'validations';

import { applyDecorators } from '@nestjs/common';
import {
  ApiProperty,
  ApiPropertyOptions,
} from '@nestjs/swagger';

export type MyAPiPropertyOptions = ApiPropertyOptions & {
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
};

export function Property(o: MyAPiPropertyOptions) {
  const v: PropertyDecorator[] = [];

  if (o.exclude === true) v.push(Exclude());
  else v.push(Expose());

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

  if (o.nullable === true) v.push(IsOptional());
  else v.push(IsNotEmpty());

  return applyDecorators(ApiProperty(o), ...v);
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
  return Property({ ...o, isNumber: true, type: 'number' });
}

export function NumberStringProperty(o?: MyAPiPropertyOptions) {
  return Property({ ...o, isNumberString: true, type: 'number' });
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
