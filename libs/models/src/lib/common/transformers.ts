import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import { ValueTransformer } from 'typeorm';

export function JSONTransformer(): ValueTransformer {
  return {
    to: (value) => value && JSON.stringify(value),
    from: (value) => value,
  };
}

export function PasswordTransformer(): ValueTransformer {
  return {
    to: async (value) => value && hashSync(value, genSaltSync(8)),
    from: (value) => value,
  };
}
