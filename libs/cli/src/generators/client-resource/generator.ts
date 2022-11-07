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

import { ClientResourceGeneratorSchema } from './schema';

const mapName = ([key, value]) => ({ name: key, ...(value as any) });

export default async function (
  tree: Tree,
  options: ClientResourceGeneratorSchema
) {
  const { project, name } = options;

  const target = `/libs/client-resources/src/lib/${project}`;

  const filename = kebabCase(name);
  const classname = upperFirst(camelCase(name));

  console.table({
    project,
    name,
    filename,
    classname,
  });

  const ssot = JSON.parse(
    readFileSync(join(tree.root, 'projects', project, 'ssot.json')).toString()
  );

  console.log({
    ssot: ssot,
  });

  const entityObj = ssot[filename]['entity'];
  const viewObj = ssot[filename]['view'];

  const columns = Object.entries(entityObj.columns).map(mapName);
  const relations = Object.entries(entityObj.relations || {}).map(mapName);
  const viewColumns = Object.entries(viewObj.columns).map(mapName);

  generateFiles(tree, join(__dirname, 'files'), target, {
    filename,
    classname,
    columns,
    relations,
    viewColumns,
    project,
    temp: '',
  });

  await formatFiles(tree);
}
