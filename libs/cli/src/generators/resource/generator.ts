import {
  camelCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  generateFiles,
  getProjects,
  Tree,
} from '@nrwl/devkit';

import { addExport } from '../common';
import { ResourceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  const sourceRoot = getProjects(tree).get('resources').sourceRoot;

  const targetDir = join(sourceRoot, 'src', 'lib');

  const templateOptions = {
    template: '',
    fileName: snakeCase(options.name).replace('_', '-'),
    className: upperFirst(camelCase(options.name)),
  };

  generateFiles(tree, join(__dirname, 'files'), targetDir, templateOptions);

  await addExport(tree, targetDir, templateOptions.fileName);
}
