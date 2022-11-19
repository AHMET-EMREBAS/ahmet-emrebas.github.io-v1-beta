import {
  genSaltSync,
  hashSync,
} from 'bcrypt';

export function hashPassword(value: string) {
  return hashSync(value, genSaltSync(8));
}
