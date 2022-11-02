import { appendFileSync } from 'fs';
import {
  camelCase,
  kebabCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const target = '/libs/models/src/lib';

  const filename = kebabCase(options.name);
  const classname = upperFirst(camelCase(options.name));

  generateFiles(tree, join(__dirname, 'files'), target, {
    filename,
    classname,
    temp: '',
  });

  appendFileSync(
    join(tree.root, target, 'index.ts'),
    `export * from './${filename}';`
  );

  formatFiles(tree);
}
