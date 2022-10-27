import * as path from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ResourceGeneratorSchema } from './schema';

function addFiles(tree: Tree) {
  generateFiles(tree, path.join(__dirname, 'files'), 'apps/api/src/app', {
    filename: 'some',
    template: '',
  });
}

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  addFiles(tree);
  await formatFiles(tree);
}
