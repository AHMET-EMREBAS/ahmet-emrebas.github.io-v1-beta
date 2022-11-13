import {
  IsNotEmpty,
  IsOptional,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export interface ValidationOptins {
  type?: string;
  minLength?: number;
  maxLength?: number;
  minimum?: number;
  maximum?: number;
  password?: boolean;
  email?: boolean;
  required?: boolean;
}

export function Validations(o: ValidationOptins) {
  const v: PropertyDecorator[] = [];

  if (o.minLength) v.push(MinLength(o.minLength));
  if (o.maxLength) v.push(MaxLength(o.maxLength));
  if (o.minimum) v.push(Min(o.minimum));
  if (o.maximum) v.push(Max(o.maximum));

  if (o.required === true) {
    v.push(IsNotEmpty());
  } else {
    v.push(IsOptional());
  }

  return applyDecorators(ApiProperty({ ...o }), ...v);
}
