import {
  kebabCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const target = '/libs/models/src/lib/models';

  generateFiles(tree, join(__dirname, 'files'), target, {
    filename: snakeCase(options.name),
    classname: upperFirst(kebabCase(options.name)),
    temp: '',
  });
}
