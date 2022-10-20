import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import { ValueTransformer } from 'typeorm';

export function jsonTransformer(): ValueTransformer {
  return {
    from: (value) => value && JSON.parse(value),
    to: (value) => value && JSON.stringify(value),
  };
}

export function passwordTransformer(): ValueTransformer {
  return {
    to: (value) => value && hashSync(value, genSaltSync(8)),
    from: (value) => value,
  };
}
