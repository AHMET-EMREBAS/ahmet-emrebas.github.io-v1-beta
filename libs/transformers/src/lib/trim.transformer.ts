import { Transform } from 'class-transformer';
import { isString } from 'class-validator';

export function TrimTransformer() {
  return Transform(({ value }) => {
    if (isString(value)) {
      return value.trim();
    }
    return undefined;
  });
}
