import { exec } from 'child_process';
import { join } from 'path';

import { Tree } from '@nrwl/devkit';

import { DeployGeneratorSchema } from './schema';

export default async function (tree: Tree, options: DeployGeneratorSchema) {
  const APP_NAME = options.name;
  const TARGET = join(tree.root, 'dist', 'apps', APP_NAME, 'publish.sh');
  console.log(TARGET);
  // execSync(`sh ${TARGET}`);
  exec(`sh ${TARGET}`, (error, stdout, stderr) => {
    console.log('* ' + stdout);
    console.log('* ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
}
