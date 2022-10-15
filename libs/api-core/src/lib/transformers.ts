import { ValueTransformer } from 'typeorm';

export function jsonTransformer(): ValueTransformer {
  return {
    from: (value) => value && JSON.parse(value),
    to: (value) => value && JSON.stringify(value),
  };
}
