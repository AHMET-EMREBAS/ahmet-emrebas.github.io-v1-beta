import { readFileSync } from 'fs';
import {
  camelCase,
  kebabCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import * as genEntity from '../entity/generator';
import { ResourceGeneratorSchema } from './schema';

const mapName = ([key, value]) => ({ name: key, ...(value as any) });

async function genResource(tree: Tree, options: ResourceGeneratorSchema) {
  const { project, name } = options;

  const target = `/libs/rest/src/lib/${project}`;

  const filename = kebabCase(name);
  const classname = upperFirst(camelCase(name));

  const ssot = JSON.parse(
    readFileSync(join(tree.root, 'projects', project, 'ssot.json')).toString()
  );

  const entityObj = ssot[filename]['entity'];
  const viewObj = ssot[filename]['view'];

  const columns = Object.entries(entityObj.columns).map(mapName);
  const relations = Object.entries(entityObj.relations || {}).map(mapName);
  const viewColumns = Object.entries(viewObj.columns).map(mapName);

  generateFiles(tree, join(__dirname, 'files'), target, {
    filename,
    classname,
    project,
    columns,
    relations,
    viewColumns,
    temp: '',
  });
}

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  await genResource(tree, options);
  await genEntity.default(tree, options);
  await formatFiles(tree);
}
