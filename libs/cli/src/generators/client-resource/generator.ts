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

import {
  getColumns,
  getRelationColumns,
  loadMetaData,
} from '../utils';
import { ClientResourceGeneratorSchema } from './schema';

const mapName = ([key, value]) => ({ name: key, ...(value as any) });

export default async function (
  tree: Tree,
  options: ClientResourceGeneratorSchema
) {
  const { project, name } = options;
  const projectName = project;
  const entityName = name;

  const target = `/libs/client-resources/src/lib/${project}`;

  const filename = kebabCase(name);
  const classname = upperFirst(camelCase(name));

  const entityMetadata = loadMetaData(tree, projectName, entityName);

  const columns = getColumns(entityMetadata);
  const relations = getRelationColumns(entityMetadata);

  const viewColumns = [...columns, ...relations];

  generateFiles(tree, join(__dirname, 'files'), target, {
    filename,
    classname,
    columns,
    relations,
    viewColumns,
    filterColumns: viewColumns,
    project,
    temp: '',
  });

  await formatFiles(tree);
}
