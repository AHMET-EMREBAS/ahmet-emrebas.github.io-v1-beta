import {
  camelCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
} from '@nrwl/devkit';

import { addExports } from '../common';
import { ResourceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  const sourceRoot = getProjects(tree).get(options.project).sourceRoot;

  const targetDir = join(sourceRoot, 'app', 'resources');

  const templateOptions = {
    template: '',
    fileName: snakeCase(options.name).replace('_', '-'),
    className: upperFirst(camelCase(options.name)),
  };

  generateFiles(tree, join(__dirname, 'files'), targetDir, templateOptions);

  addExports(targetDir);

  await formatFiles(tree);
}
