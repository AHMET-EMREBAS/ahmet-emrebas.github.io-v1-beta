import { readFileSync } from 'fs';
import {
  camelCase,
  snakeCase,
  upperFirst,
} from 'lodash';
import { join } from 'path';
import { EntitySchemaOptions } from 'typeorm';

import {
  generateFiles,
  getProjects,
  Tree,
  workspaceRoot,
} from '@nrwl/devkit';

import { addExport } from '../common';
import { EntityGeneratorSchema } from './schema';

const valueTypemap = {
  text: 'string',
  number: 'number',
  date: 'Date',
  object: 'Record<string,any>',
};

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const project = getProjects(tree).get('models');
  const targetRoot = join(project.sourceRoot, 'lib');

  const entityOptions = JSON.parse(
    readFileSync(
      join(workspaceRoot, 'ssot', 'inventory', 'models', options.name + '.json')
    ).toString()
  ) as EntitySchemaOptions<any>;

  const columnEntries = Object.entries(entityOptions.columns);

  const columns = columnEntries.map(([key, value]) => {
    return {
      name: key,
      valueType: valueTypemap[value.type as any] || 'any',
      ...value,
      unique: !!value.unique,
    };
  });

  const relations = Object.entries(entityOptions.relations || {}).map(
    ([key, value]) => {
      return {
        name: key,
        valueType: upperFirst(value.target as string),
        arrayValueType: ['many-to-many', 'one-to-many'].includes(value.type)
          ? '[]'
          : '',
        ...value,
      };
    }
  );

  const templateOptions = {
    template: '',
    fileName: snakeCase(options.name).replace('_', '-'),
    className: upperFirst(camelCase(options.name)),
    columns,

    relations,
  };

  generateFiles(tree, join(__dirname, 'files'), targetRoot, templateOptions);

  await addExport(tree, targetRoot, templateOptions.fileName);
}
