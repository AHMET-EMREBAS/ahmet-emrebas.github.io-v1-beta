import {
  genSaltSync,
  hashSync,
} from 'bcrypt';
import { ValueTransformer } from 'typeorm';

export function PasswordTransformer(): ValueTransformer {
  return {
    to: (value) => {
      return hashSync(value, genSaltSync(8));
    },
    from: (value) => value,
  };
}
