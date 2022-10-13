import {
  appendFileSync,
  readdirSync,
} from 'fs';
import { join } from 'path';

import {
  formatFiles,
  Tree,
} from '@nrwl/devkit';

export async function addExport(
  tree: Tree,
  targetRoot: string,
  fileName: string
) {
  const dirs = readdirSync(targetRoot);

  const exportText = `\nexport * from './${fileName}'`;

  appendFileSync(join(targetRoot, 'index.ts'), exportText);
  await formatFiles(tree);
}
