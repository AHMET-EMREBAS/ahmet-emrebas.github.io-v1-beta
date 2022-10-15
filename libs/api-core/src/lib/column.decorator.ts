import {
  Column as Col,
  ColumnOptions,
  ValueTransformer,
} from 'typeorm';

import { jsonTransformer } from './transformers';

export function Column(options: ColumnOptions & { transform?: 'json' }) {
  const transformers: ValueTransformer[] = [];

  if (options.transform === 'json') {
    transformers.push(jsonTransformer());
  }

  return Col({ ...options, transformer: transformers });
}
