import { join } from 'path';

import {
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ResourceGeneratorSchema } from './schema';

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  return generateFiles(
    tree,
    join(__dirname, 'files'),
    options.projectName,
    null
  );
}
