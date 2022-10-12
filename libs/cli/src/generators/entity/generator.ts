import { appendFileSync } from 'fs';
import {
  camelCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  getProjects,
  Tree,
} from '@nrwl/devkit';

import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const project = getProjects(tree).get(options.project);

  const targetRoot = join(project.sourceRoot, 'lib');

  const indexFilePath = join(targetRoot, 'index.ts');

  console.table({
    targetRoot,
    indexFilePath,
  });
  const templateOptions = {
    template: '',
    fileName: snakeCase(options.name).replace('_', '-'),
    className: upperFirst(camelCase(options.name)),
  };

  generateFiles(tree, join(__dirname, 'files'), targetRoot, templateOptions);

  appendFileSync(
    indexFilePath,
    `\nexport * from './${templateOptions.fileName}' `
  );

  await formatFiles(tree);
}
