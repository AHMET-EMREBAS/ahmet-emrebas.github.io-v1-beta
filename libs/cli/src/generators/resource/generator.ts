import {
  camelCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ResourceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  const targetFolder = `./apps/${options.project}/src/app/resources`;
  generateFiles(tree, join(__dirname, 'files'), targetFolder, {
    template: '',
    fileName: snakeCase(options.name).replace('_', '-'),
    className: upperFirst(camelCase(options.name)),
  });

  await formatFiles(tree);
}