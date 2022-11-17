import { execSync } from 'child_process';
import { join } from 'path';

import { Tree } from '@nrwl/devkit';

import { DeployGeneratorSchema } from './schema';

export default async function (tree: Tree, options: DeployGeneratorSchema) {
  const APP_NAME = options.name;
  const TARGET = join(tree.root, 'dist', 'apps', APP_NAME, 'publish.sh');
  execSync(`sh ${TARGET}`);
}
