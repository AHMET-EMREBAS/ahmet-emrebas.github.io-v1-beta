import { upperFirst } from 'lodash';
import * as path from 'path';
import { ColumnOptions } from 'typeorm';

import {
  formatFiles,
  generateFiles,
  Tree,
} from '@nrwl/devkit';

import { ResourceGeneratorSchema } from './schema';

export class ResourceOptions {
  name = 'resource';
  project = 'api';
  columns: Record<
    string,
    {
      propertyType: string;
      columnOptions: ColumnOptions;
    }
  >[] = [
    {
      name: {
        propertyType: 'string',
        columnOptions: {
          type: 'text',
        },
      },
    },
  ];
}

function addFiles(tree: Tree, name: string, project: string) {
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    `apps/${project}/src/app`,
    {
      filename: name,
      classname: upperFirst(name),
      template: '',
    }
  );
}

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  addFiles(tree, options.name, options.project);
  await formatFiles(tree);
}
