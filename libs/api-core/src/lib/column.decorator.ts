import {
  Column as Col,
  ColumnOptions,
  ValueTransformer,
} from 'typeorm';

import {
  jsonTransformer,
  passwordTransformer,
} from './transformers';

export function Column(
  options: ColumnOptions & { transform?: 'json' | string }
) {
  const transformers: ValueTransformer[] = [];

  if (options.transform === 'json') {
    transformers.push(jsonTransformer());
  }

  if (options.transform === 'password') {
    transformers.push(passwordTransformer());
  }

  return Col({ ...options, transformer: transformers });
}
