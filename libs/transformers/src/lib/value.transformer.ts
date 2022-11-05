import { Transform } from 'class-transformer';
import {
  isBooleanString,
  isNumberString,
  isString,
} from 'class-validator';

export function IntTransformer(defaultValue?: number) {
  return Transform(({ value }) => {
    if (isNumberString(value)) {
      const p = parseInt(value);
      return p;
    }
    return defaultValue;
  });
}

export function FloatTransformer(defaultValue?: number) {
  return Transform(({ value }) => {
    if (isNumberString(value)) {
      return parseFloat(value);
    }
    return defaultValue;
  });
}

export function BooleanTransformer(defaultValue?: boolean) {
  return Transform(({ value }) => {
    if (isString(value)) {
      if (isBooleanString(value.trim().toLowerCase())) {
        return value == 'true' ? true : false;
      }
    }
    return defaultValue;
  });
}
