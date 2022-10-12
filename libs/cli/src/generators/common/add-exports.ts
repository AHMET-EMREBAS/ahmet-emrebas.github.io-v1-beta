import {
  lstatSync,
  readdirSync,
  writeFileSync,
} from 'fs';
import { join } from 'path';

export function addExports(targetRoot: string) {
  const dirs = readdirSync(targetRoot);

  const exports = dirs
    .filter((e) => lstatSync(join(targetRoot, e)).isDirectory())
    .map((e) => `export * from './${e}'`)
    .join('\n');

  writeFileSync(join(targetRoot, 'index.ts'), exports);
}
