import {
  appendFileSync,
  readFileSync,
} from 'fs';
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

import { EntityGeneratorSchema } from './schema';

export default async function (tree: Tree, options: EntityGeneratorSchema) {
  const target = '/libs/models/src/lib';

  const filename = kebabCase(options.name);
  const classname = upperFirst(camelCase(options.name));

  console.table({
    filename,
    classname,
    root: tree.root,
  });

  const ssot = JSON.parse(
    readFileSync(join(tree.root, 'ssot.json')).toString()
  );

  const columns = Object.entries(ssot[filename]['entity'].columns).map(
    ([key, value]) => {
      return {
        name: key,
        ...(value as any),
      };
    }
  );

  const relations = Object.entries(ssot[filename]['entity'].relations).map(
    ([key, value]) => {
      return {
        name: key,
        ...(value as any),
      };
    }
  );

  const viewColumns = Object.entries(ssot[filename]['view'].columns).map(
    ([key, value]) => {
      return {
        name: key,
        ...(value as any),
      };
    }
  );

  // console.log(ssot.sample.entity.columns);
  console.table({
    columns,
    relations,
    viewColumns,
  });

  console.log(columns);
  console.log(relations);
  console.log(viewColumns);

  generateFiles(tree, join(__dirname, 'files'), target, {
    filename,
    classname,
    columns,
    relations,
    viewColumns,
    temp: '',
  });

  appendFileSync(
    join(tree.root, target, 'index.ts'),
    `export * from './${filename}';`
  );

  await formatFiles(tree);
}
