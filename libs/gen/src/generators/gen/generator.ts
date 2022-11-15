import { readdirSync } from 'fs';
import { join } from 'path';

import { Tree } from '@nrwl/devkit';

import * as generateClients from '../client/generator';
import * as generateEntities from '../entity/generator';
import * as generateInterfaces from '../interface/generator';
import * as generateRest from '../rest/generator';
import { GenGeneratorSchema } from './schema';

export default async function (tree: Tree, options: GenGeneratorSchema) {
  const projectDir = join(tree.root, 'projects', options.project);

  const dirs = readdirSync(projectDir);
  const resouceNames = dirs.map((e) => e.split('.')[0]);

  console.log('..........START');
  for (const rn of resouceNames) {
    await generateInterfaces.default(tree, { ...options, name: rn });
    await generateEntities.default(tree, { ...options, name: rn });
    await generateClients.default(tree, { ...options, name: rn });
    await generateRest.default(tree, { ...options, name: rn });
  }
  console.log('...........END');
}
