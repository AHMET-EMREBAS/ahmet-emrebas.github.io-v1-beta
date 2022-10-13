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
} from '@nrwl/devkit';

import { addExport } from '../common';
import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  console.log(options);

  const entity = JSON.parse(options.entity) as EntitySchemaOptions<any>;

  const project = getProjects(tree).get(options.project);
  const targetRoot = join(project.sourceRoot, 'lib');

  const templateOptions = {
    template: '',
    fileName: snakeCase(options.name).replace('_', '-'),
    className: upperFirst(camelCase(options.name)),
    // entityName: options.entity.name,
    // columns: options.entity.columns,
  };

  generateFiles(tree, join(__dirname, 'files'), targetRoot, templateOptions);

  await addExport(tree, targetRoot, templateOptions.fileName);
}
