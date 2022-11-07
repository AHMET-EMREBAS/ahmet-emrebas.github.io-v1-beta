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

import * as genClient from '../client-resource/generator';
import * as genEntity from '../entity/generator';
import { ResourceGeneratorSchema } from './schema';

const mapName = ([key, value]) => ({ name: key, ...(value as any) });

async function genRest(tree: Tree, options: ResourceGeneratorSchema) {
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

async function updateApiAppModule(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const target = `/apps/api/src`;
  const { project, name } = options;
  const ssot = JSON.parse(
    readFileSync(join(tree.root, 'projects', project, 'ssot.json')).toString()
  );

  const modules = Object.keys(ssot).map((e) => [
    upperFirst(e),
    e.toLowerCase(),
  ]);

  generateFiles(tree, join(__dirname, 'app-module'), target, {
    project,
    modules,
    temp: '',
  });
}

async function updateClientAppModule(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const target = `/apps/web/src`;
  const { project, name } = options;
  const ssot = JSON.parse(
    readFileSync(join(tree.root, 'projects', project, 'ssot.json')).toString()
  );

  const modules = Object.keys(ssot).map((e) => [
    upperFirst(e),
    e.toLowerCase(),
  ]);

  generateFiles(tree, join(__dirname, 'web-app'), target, {
    project,
    modules,
    temp: '',
  });
}

async function generateAll(tree, _options) {
  const { project } = _options;
  const ssot = JSON.parse(
    readFileSync(join(tree.root, 'projects', project, 'ssot.json')).toString()
  );
  const names = Object.keys(ssot);

  for (const n of names) {
    const options = { ..._options, name: n };
    await genRest(tree, options);
    await genEntity.default(tree, options);
    await genClient.default(tree, options);
  }
}

export default async function (tree: Tree, options: ResourceGeneratorSchema) {
  await generateAll(tree, options);
  await updateApiAppModule(tree, options);
  await updateClientAppModule(tree, options);
  await formatFiles(tree);
}
