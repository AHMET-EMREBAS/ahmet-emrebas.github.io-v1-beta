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

import * as genEntity from '../entity/generator';
import { ResourceGeneratorSchema } from './schema';

async function genResource(tree: Tree, options: ResourceGeneratorSchema) {
  const target = '/libs/rest/src/lib';

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
}

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  await genResource(tree, options);
  await genEntity.default(tree, options);
  formatFiles(tree);
}
