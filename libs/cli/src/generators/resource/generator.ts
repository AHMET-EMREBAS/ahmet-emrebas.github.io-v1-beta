import * as path from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ResourceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    `apps/${options.project}/src/app/resources/${options.name}`,
    {
      template: '',
      name: options.name,
    }
  );

  await formatFiles(tree);
}
