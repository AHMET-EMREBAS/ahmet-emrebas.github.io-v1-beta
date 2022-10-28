import { upperFirst } from 'lodash';
import * as path from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ResourceGeneratorSchema } from './schema';

function addFiles(tree: Tree, name: string, project: string) {
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    `apps/${project}/src/app`,
    {
      filename: name,
      classname: upperFirst(name),
      template: '',
    }
  );
}

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  addFiles(tree, options.name, options.project);
  await formatFiles(tree);
}
