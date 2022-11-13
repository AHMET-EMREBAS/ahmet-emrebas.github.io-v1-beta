import { readFile } from 'fs-extra';
import { load } from 'js-yaml';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  names,
  Tree,
} from '@nrwl/devkit';

import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const schemaPath = join(
    tree.root,
    'projects',
    options.project,
    `${options.name}.meta.yaml`
  );
  const fileContent = (await readFile(schemaPath)).toString();

  const schemaOptions = load(fileContent);

  const target = join('libs', 'models', 'src', 'lib', options.project);

  console.log(schemaOptions);
  console.log(target);

  await generateFiles(tree, join(__dirname, 'files'), target, {
    name: options.name,
    classname: names(options.name).className,
    options: schemaOptions,
    temp: '',
  });
  await formatFiles(tree);
}
