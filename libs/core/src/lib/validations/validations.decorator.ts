import { Transform } from 'class-transformer';
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
  min?: number;
  max?: number;
  password?: boolean;
  email?: boolean;
  required?: boolean;
}

export function Validations(o: ValidationOptins) {
  const v: PropertyDecorator[] = [];

  if (o.minLength) v.push(MinLength(o.minLength));
  if (o.maxLength) v.push(MaxLength(o.maxLength));
  if (o.min) v.push(Min(o.min));
  if (o.max) v.push(Max(o.max));

  if (o.required === true) {
    v.push(IsNotEmpty());
  } else {
    v.push(IsOptional());
  }

  if (o.type === 'number') {
    v.push(
      Transform(({ value }) => {
        const v = parseFloat(value);

        if (isNaN(v)) {
          return 0;
        }
        return v;
      })
    );
  }

  return applyDecorators(ApiProperty({ ...o }), ...v);
}
