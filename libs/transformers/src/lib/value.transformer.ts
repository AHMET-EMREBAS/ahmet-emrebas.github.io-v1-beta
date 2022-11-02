import { Transform } from 'class-transformer';
import {
  isBooleanString,
  isNumberString,
  isString,
} from 'class-validator';

export function IntTransformer() {
  return Transform(({ value }) => {
    if (isNumberString(value)) {
      return parseInt(value);
    }
    return undefined;
  });
}

export function FloatTransformer() {
  return Transform(({ value }) => {
    if (isNumberString(value)) {
      return parseFloat(value);
    }
    return undefined;
  });
}

export function BooleanTransformer() {
  return Transform(({ value }) => {
    if (isString(value)) {
      if (isBooleanString(value.trim().toLowerCase())) {
        return value == 'true' ? true : false;
      }
    }
    return undefined;
  });
}
