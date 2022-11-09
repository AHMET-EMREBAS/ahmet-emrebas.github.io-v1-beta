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
import { EntityGeneratorSchema } from './schema';

const mapName = ([key, value]) => ({ name: key, ...(value as any) });

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const projectName = options.project;
  const entityName = options.name;

  const targetDirectory = `/libs/models/src/lib/${projectName}`;

  const filename = kebabCase(entityName);
  const classname = upperFirst(camelCase(entityName));

  const entityMetadata = loadMetaData(tree, projectName, entityName);

  const columns = getColumns(entityMetadata);
  const relations = getRelationColumns(entityMetadata);

  const viewColumns = [...columns, ...relations];

  generateFiles(tree, join(__dirname, 'files2'), targetDirectory, {
    filename,
    classname,
    columns,
    relations,
    viewColumns,
    project: projectName,
    temp: '',
  });

  await formatFiles(tree);
}
