import { execSync } from 'child_process';
import path = require('path');
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { PublishGeneratorSchema } from './schema';

export default async function (tree: Tree, options: PublishGeneratorSchema) {
  const APP_NAME = options.name;
  const TARGET = join('dist', 'apps', APP_NAME);
  const FILES = path.join(__dirname, 'files');
  const OPTIONS = {
    temp: '',
    name: APP_NAME,
    version: '1.0.0',
  };

  console.log(`- Building ${APP_NAME}`);
  execSync(`nx build ${APP_NAME}`);

  await generateFiles(tree, FILES, TARGET, OPTIONS);
  await formatFiles(tree);
}
