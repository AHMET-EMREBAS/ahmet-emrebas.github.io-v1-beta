import {
  camelCase,
  kebabCase,
  upperFirst,
} from 'lodash';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ToTemplateGeneratorSchema } from './schema';

const mapName = ([key, value]) => ({ name: key, ...(value as any) });

export default async function (tree: Tree, options: ToTemplateGeneratorSchema) {
  const { project, name, type } = options;

  const source = `/libs/${type}/src/lib/${project}`;

  const target = `/libs/cli/${type}`;
  const filename = kebabCase(name);
  const classname = upperFirst(camelCase(name));

  generateFiles(tree, source, source, {
    filename,
    classname,
    project,
    temp: '',
  });

  await formatFiles(tree);
}
